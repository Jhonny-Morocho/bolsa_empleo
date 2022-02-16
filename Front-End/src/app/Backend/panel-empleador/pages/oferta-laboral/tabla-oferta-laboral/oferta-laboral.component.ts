import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import{environment} from 'src/environments/environment.prod';
import {OfertasLaboralesService} from 'src/app/servicios/oferta-laboral.service';
import {OfertaLaboralModel} from 'src/app/models/oferta-laboral.models';
import {EmpleadorModel} from 'src/app/models/empleador.models';
import {SerivicioEmpleadorService} from 'src/app/servicios/servicio-empleador.service';
import { dataTable } from 'src/app/templateDataTable/configDataTable';
import { DataTableDirective } from 'angular-datatables';
declare var $:any;
@Component({
  selector: 'app-oferta-laboral',
  templateUrl: './oferta-laboral-empleador.component.html'
})
export class OfertaLaboralComponent implements OnInit,OnDestroy {
  //visualizar informacion de empleador
  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  instanciaEmpleadorModelVer:EmpleadorModel;
  instanciaOfertaLaboralActualizar:OfertaLaboralModel;
  intanciaOfertaLaboral:OfertaLaboralModel;
  dominio=environment;
  //array de data ofertas labarales
  ofertasLaborales:OfertaLaboralModel[]=[];

  instanciaOfertaVer:OfertaLaboralModel;


  constructor(private servicioOferta:OfertasLaboralesService) { }

  ngOnInit() {
    this.instanciaOfertaVer=new OfertaLaboralModel();
    this.intanciaOfertaLaboral=new OfertaLaboralModel();
    this.instanciaEmpleadorModelVer=new EmpleadorModel();
    this.instanciaOfertaLaboralActualizar=new OfertaLaboralModel();
    this.configurarParametrosDataTable();
    this.cargarTabla();


  }
  cargarTabla(){
    //listamos los titulos academicos
    this.servicioOferta.listarOfertasLaboralesExternal_us().subscribe(
      res=>{
        if(res['Siglas']=='OE'){
          this.ofertasLaborales =res['mensaje'];
          this.dtTrigger.next();
          return;
        }
        Swal('Información',res['mensaje'], 'info');
      },
      (error)=>{
        Swal('Error', error['message'], 'error')
      }
    );
   }
   ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    try {
      this.dtTrigger.unsubscribe();
    } catch (error) {
      //le puse x q no uso suscripcion/mas info:/https://l-lin.github.io/angular-datatables/#/basic/angular-way
      console.warn(error);
    }
  }

  verOfertaModal(id:Number){
    //necesito converitr o typescrip me da error
    var index=parseInt((id).toString(), 10);
    this.instanciaOfertaVer.puesto=this.ofertasLaborales[index]['puesto'];
    this.instanciaOfertaVer.requisitos=this.ofertasLaborales[index]['requisitos'];
    this.instanciaOfertaVer.descripcion=this.ofertasLaborales[index]['descripcion'];
    this.instanciaOfertaVer.obervaciones=this.ofertasLaborales[index]['obervaciones'];
    this.instanciaOfertaVer.razon_empresa=this.ofertasLaborales[index]['razon_empresa'];
    this.instanciaOfertaVer.lugar=this.ofertasLaborales[index]['lugar'];
    this.instanciaOfertaVer.correo=localStorage.getItem("correo");
    $('#exampleModal').modal('show');

  }
  cerrarModal(){
    $('#exampleModal').modal('hide');
  }
  eliminarOfertaLaboral(external_of:string,nombreTitulo:string,index:number){

    // ocupo el servicio
     Swal({
       title: '¿Esta seguro?',
       text: "Se eliminara  "+nombreTitulo,
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Si'
     }).then((result) => {
       if (result.value) {
         this.instanciaOfertaLaboralActualizar.estado=0;
         this.instanciaOfertaLaboralActualizar.external_of=external_of;
         this.servicioOferta.eliminarOfertaLaboral(this.instanciaOfertaLaboralActualizar).subscribe(
           res=>{
             //elimino visualmente
             if(res["Siglas"]=="OE"){
               this.ofertasLaborales.splice(index,1); //desde la posición 2, eliminamos 1 elemento
               const toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 5000
                });
                toast({
                  type: 'success',
                  title: 'Registro '+nombreTitulo+' eliminado'
                })
                this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.destroy();
                });
                this.cargarTabla();
                return;
             }
             Swal('Información',res['mensaje'], 'info')

           },(error)=>{
             Swal('Error',error['message'], 'error')
           }
         );
       }
     })
    //alert("estoy eliminado");

  }
   //conversion de estado
   estadoConversion(numeroEstado:Number):boolean{
    if(numeroEstado==1){
        return false;
    }
    if(numeroEstado==2){
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
  configurarParametrosDataTable(){
    this.dtOptions = dataTable;
  }
}
