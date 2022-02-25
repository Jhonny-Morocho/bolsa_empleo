import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosCapacitacionesModel } from 'src/app/models/cursos-capacitaciones.models';
import { PostulanteModel } from 'src/app/models/postulante.models';
import { TituloModel } from 'src/app/models/titulo.models';
import { CursosCapacitacionesService } from 'src/app/servicios/cursos-capacitaciones.service';
import { OfertaLaboralEstudianteService } from 'src/app/servicios/ofertLaboral-Estudiante.service';
import { TituloService } from 'src/app/servicios/titulos.service';
import {OfertasLaboralesService} from 'src/app/servicios/oferta-laboral.service';
import Swal from 'sweetalert2';
import { OfertaLaboralModel } from '../../../../../models/oferta-laboral.models';



declare var $:any;
@Component({
  selector: 'app-postulantes-oferta',
  templateUrl: './postulantes-oferta-empleador.component.html'
})
export class PostulantesOfertaComponent implements OnInit {
  instanciaVerPostulante:PostulanteModel;
  @ViewChildren('check_postulantes') public check_postulantes: ElementRef<HTMLInputElement>[];
  arrayPostulante:PostulanteModel[]=[];
  estadoOfertaLaboralFinalizada:Boolean=false;
  externalOferta:string="";
  nombreOfertaLabroal:string="";
  arrayTitulosAcademicos:TituloModel[]=[];
  instanciaOfertaLaboral:OfertaLaboralModel;
  arrayCursosCapacitaciones:CursosCapacitacionesModel[]=[];
  existeRegistros:boolean=false;
  existeAlgunPostulanteChechado:boolean=false;

  constructor(private servicioOfertaEstudiante:OfertaLaboralEstudianteService,
    private servicioOfertaLabotal:OfertasLaboralesService,
    private servicioCursosCapacitaciones:CursosCapacitacionesService,
    private servicioTitulosAcademicos:TituloService,
    private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.instanciaOfertaLaboral=new OfertaLaboralModel();
    this.instanciaVerPostulante=new PostulanteModel();
    this.estudiantesOfertaLaboral();

  }

  ofertaLaboralFinalizar(external_of:string){
    this.servicioOfertaLabotal.obtenerOfertaLaboralExternal_of(external_of).subscribe(
      res=>{
          if(parseInt(res['mensaje']['estado'])==4){
            this.estadoOfertaLaboralFinalizada=true;
          }
      },error=>{
        Swal('Error', error['message'], 'error');
      }
    );
  }

  //listamos todos los estudiantes que este postulando a esta oferta laboral
  estudiantesOfertaLaboral(){
    //obtener el external ofert desde la url
    this.activateRoute.params.subscribe(
      params=>{
        this.servicioOfertaEstudiante.listTodasEstudiantePostulanOfertaExternal_of_empleador(params['external_of']).subscribe(
          res=>{
            //guardo el external oferta para poder enviarlo para cambiar de estado a la oferta
            this.externalOferta=params['external_of'];
            this.ofertaLaboralFinalizar(this.externalOferta);
            this.arrayPostulante=res;
            if(this.arrayPostulante.length>0){
              this.existeRegistros=true;
            }
          },error=>{
            Swal('Error',error['message'], 'error');
          }
        );
    });

  }
  verHojaVidaModal(id:Number){
    var index=parseInt((id).toString(), 10);
    $('#motrarHojaVidaGeneral').modal('show');
    //============= mostamos la informacion personal ========================
    this.instanciaVerPostulante.nombre=this.arrayPostulante[index]['nombre'];
    this.instanciaVerPostulante.apellido=this.arrayPostulante[index]['apellido'];
    this.instanciaVerPostulante.genero=this.arrayPostulante[index]['genero'];
    this.instanciaVerPostulante.telefono=this.arrayPostulante[index]['telefono'];
    this.instanciaVerPostulante.cedula=this.arrayPostulante[index]['cedula'];
    this.instanciaVerPostulante.fecha_nacimiento=this.arrayPostulante[index]['fecha_nacimiento'];
    this.instanciaVerPostulante.direccion_domicilio=this.arrayPostulante[index]['direccion_domicilio'];
    this.instanciaVerPostulante.correo=this.arrayPostulante[index]['correo'];
    //============= mostras los curso y capacitaciones ===============
    this.cursosCapacitaciones(this.arrayPostulante[index]['external_us']);
     //============= mostras los titulos   ===============
     this.titulosAcademicos(this.arrayPostulante[index]['external_us']);
  }
  titulosAcademicos(exteneral_us:string){
    this.servicioTitulosAcademicos.listarTitulosExternal_usConParametro(exteneral_us).subscribe(
      siHaceBien=>{
        this.arrayTitulosAcademicos=siHaceBien;
      },error=>{
        Swal('Info',error['mensaje'], 'info');
      }
    );
  }
  carrarModalX(){
    $('#motrarHojaVidaGeneral').modal('hide');
  }
  cursosCapacitaciones(exteneral_us:string){
    this.servicioCursosCapacitaciones.listarCursosCapacitacionesExternal_usConParametro(exteneral_us).subscribe(
      siHaceBien=>{
        this.arrayCursosCapacitaciones=siHaceBien;
      },error=>{
        Swal('Info',error['mensaje'], 'info');
      }
    );
  }
  finalizarContrarPostulantes(arrayPostulante:any){
    Swal({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
     this.servicioOfertaLabotal.actulizarEstadoOfertaLaboralFinalizado(this.instanciaOfertaLaboral,this.externalOferta).subscribe(
      res=>{
          if((res['Siglas']=='OE')){
            this.servicioOfertaEstudiante.finalizarOfertaLaboralEstudiante(arrayPostulante).subscribe(
              siHaceBien =>{
                  if(siHaceBien['Siglas']=='OE'){
                    const toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 3000
                    });
                    toast({
                      type: 'success',
                      title: 'Registrado'
                    })
                    this.estadoOfertaLaboralFinalizada=true;
                  }else{
                    Swal('Información', siHaceBien['mensaje'], 'info');

                  }
              },siHceMal=>{
                Swal('Error', siHceMal['message'], 'error');
              }
            );
          }else{
            Swal('Información', res['mensaje'], 'info');
          }
      },siHaceMal=>{
        Swal('Error',siHaceMal['message'], 'error');
      }
    );

  }

  //envia los datos del array del ckeck a guardar
  submitContrarFinalizarOfertaLaboral(){
    let arrayPosutlanteAux:any=[];
    this.instanciaOfertaLaboral.estado=4;
    //recorrer todos los inputckec
    this.check_postulantes.forEach(check => {
      let fk_estudiante=check.nativeElement.name;
      //buscar el id del estudiante en el arreglo de posutlante-oferta
      this.arrayPostulante.forEach(element => {
        if(element['fk_estudiante']==fk_estudiante){
          //esta checado
          if(check.nativeElement.checked){
              this.existeAlgunPostulanteChechado=true;
              const auxInstanciaPostulante={
                fk_estudiante:element['fk_estudiante'],
                fk_oferta_laboral:element['fk_oferta_laboral'],
                estado:2,
                external_of_est:element['external_of_est'],
                external_es:element['external_es']
              }
              arrayPosutlanteAux.push(auxInstanciaPostulante);
          }else{
            this.existeAlgunPostulanteChechado=false;
            const auxInstanciaPostulante={
              fk_estudiante:element['fk_estudiante'],
              fk_oferta_laboral:element['fk_oferta_laboral'],
              estado:1,
              external_of_est:element['external_of_est'],
              external_es:element['external_es']
            }
            arrayPosutlanteAux.push(auxInstanciaPostulante);
          }
        }
      });

    })
    //seleciono varios postulante
    if(this.existeAlgunPostulanteChechado){
          Swal({
            title: '¿Está seguro en realizar la acción? No se podrá revertir',
            text: "Ha seleccionado con éxito los postulantes de su interés, si desea continuar haga clic en Aceptar ",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.value) {
              this.finalizarContrarPostulantes(arrayPosutlanteAux);
            }
          })
    }

      //dio check pero despues desmarco
    if(!this.existeAlgunPostulanteChechado){
        Swal({
          title: '¿Está seguro en realizar la acción? No se podrá revertir ',
          text: "No ha contratado ningún postulante, si desea continuar  haga clic en Aceptar",
          type: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.value) {
            Swal({allowOutsideClick: false,type: 'info',text: 'Espere por favor...'});
            Swal.showLoading();
            this.finalizarContrarPostulantes(arrayPosutlanteAux);
          }
        })
    }
  }
}
