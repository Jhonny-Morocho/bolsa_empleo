import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { StarRatingComponent } from 'ng-starrating';
import { Subject } from 'rxjs';
import { CalificarEmpleadorModel } from 'src/app/models/calificar-empleador';
import { EmpleadorModel } from 'src/app/models/empleador.models';
import { CalificarEmpleadorService } from 'src/app/servicios/calificar-empleador.service';
import { SerivicioEmpleadorService } from 'src/app/servicios/servicio-empleador.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tabla-validar-empleadores',
  templateUrl: './tabla-validar-empleadores.component.html',
  styleUrls: ['./tabla-validar-empleadores.component.css']
})
export class TablaValidarEmpleadoresComponent implements OnInit {
  //data table
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  arrayCalificacionesEmpleadores=[];
  empleador:EmpleadorModel[]=[];
  intanciaCalifarEmpleador:CalificarEmpleadorModel;
  intanciaEmpleadorCalificar:EmpleadorModel;
  constructor(private servicioCalificarEmpleador:CalificarEmpleadorService,
              private router:Router,
              private servicioEmpleador:SerivicioEmpleadorService) { }

  ngOnInit() {
    this.intanciaEmpleadorCalificar=new EmpleadorModel();
    this.cargarTablaperfilUsuario();
    this.obtenerCalificacionesTodosEmpleadores();
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent},indice) {
    this.intanciaEmpleadorCalificar.actividad_ruc=this.empleador[0]['actividad_ruc'];
    this.intanciaEmpleadorCalificar.cedula=this.empleador[indice]['cedula'];
    this.intanciaEmpleadorCalificar.fk_ciudad=this.empleador[indice]['fk_ciudad'];
    this.intanciaEmpleadorCalificar.fk_provincia=this.empleador[indice]['fk_provincia'];
    this.intanciaEmpleadorCalificar.direccion=this.empleador[indice]['direccion'];
    this.intanciaEmpleadorCalificar.external_em=this.empleador[indice]['external_em'];
    this.intanciaEmpleadorCalificar.id=this.empleador[indice]['id'];
    this.intanciaEmpleadorCalificar.nom_representante_legal=this.empleador[indice]['nom_representante_legal'];
    this.intanciaEmpleadorCalificar.num_ruc=this.empleador[indice]['num_ruc'];
    this.intanciaEmpleadorCalificar.razon_empresa=this.empleador[indice]['razon_empresa'];
    this.intanciaEmpleadorCalificar.telefono=this.empleador[indice]['telefono'];

    //$('#CalificarEmpleador').modal('show');
    Swal({
      title: '¿Está seguro?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.intanciaCalifarEmpleador.estrellas=$event.newValue;
        //mensaje de alerta usuario
        Swal({
          allowOutsideClick:false,
          type:'info',
          text:'Espere por favor'
        });
        Swal.showLoading();
        this.calificarEmpleador();
        //borro la tabla anetrior y vuelvo a cargar
        this.dtTrigger.unsubscribe();
        this.cargarTablaperfilUsuario();
      }
    })
  }
  obtenerCalificacionesTodosEmpleadores(){
    this.servicioCalificarEmpleador.obtenerCalificacionTodosEmpleadores().subscribe(
      siHacesBien=>{
        this.arrayCalificacionesEmpleadores=siHacesBien;
      },siHacesMal=>{
        Swal('Información',siHacesMal['mensaje'], 'info');
      }
    );
  }
  dibujarEstrellas(external_em){
    let calificacion=0;

    this.arrayCalificacionesEmpleadores.forEach((element:any) => {
      if(element['empleadorExternal_em']===external_em){
        calificacion= element['empleadorPromedio'];
      }
    });

    return calificacion;
  }
  calificarEmpleador(){
    //aqui tengo el fk del empleador
    this.intanciaCalifarEmpleador.fk_empleador= this.intanciaEmpleadorCalificar.id;
    this.servicioCalificarEmpleador.registrarCalificacion(this.intanciaCalifarEmpleador).subscribe(
      siHaceBien=>{
          //consulto de nuevo las nuevas calificaiones de los emepleadores
        if(siHaceBien['Siglas']=='OE'){
          const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000
          });
          toast({
            type: 'success',
            title: 'Registrado'
          })
            //codigo para recargar en la misma pagina
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/panel-admin/tareas']);
        }else{
          Swal('Información', siHaceBien['mensaje'], 'info');
        }
      },error=>{
        Swal('Error', error['statusText'], 'error');
      });
  }
  //revisar que tipo de usuario admistrador esta usando la pagina
  cargarTablaperfilUsuario(){
    this.servicioEmpleador.listarEmpleadores().subscribe(
      res=>{
        //asginamos el array que viene del servicio
        if(res['Siglas']=='OE'){
          this.empleador =res['mensaje'];
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
          return;
        }
        Swal('Información',res['mensaje'], 'info');
      },
      (error)=>{
        Swal('Error',error['message'], 'error');
      }
    );


  }


  //conversion de estado
  estadoConversion(numeroEstado:Number):boolean{
    if(numeroEstado==0){
        return false;
    }
    if(numeroEstado==1){
      return true;
    }
  }
  //si esta revisado debe hacer algo o existr texto en el campo de obersiaciones
  estadoRevision(observacion:String):boolean{
    //si ha escrito algo la secretaria signifca que si reviso
    if(observacion.length>0){
      return true;
    }else{
      return false;
    }
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
