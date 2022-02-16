import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {OfertasLaboralesService} from 'src/app/servicios/oferta-laboral.service';
import {OfertaLaboralModel} from 'src/app/models/oferta-laboral.models';
import {EmpleadorModel} from 'src/app/models/empleador.models';
import {AutenticacionUserService} from 'src/app/servicios/autenticacion-usuario.service';
import {SerivicioPostulanteService} from 'src/app/servicios/serivicio-postulante.service';
import { Subject } from 'rxjs';
import {environment} from 'src/environments/environment';
import {OfertaLaboralEstudianteService} from 'src/app/servicios/ofertLaboral-Estudiante.service';
import {OfertaLaboralEstudianteModel} from 'src/app/models/oferLaboral-Estudiante.models';
import { forEach } from '@angular/router/src/utils/collection';
import { dataTable } from 'src/app/templateDataTable/configDataTable';
declare var JQuery:any;
declare var $:any;
//declare var DateTime:any;
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { NgForm } from '@angular/forms';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-postular-oferta-laboral',
  templateUrl: './ofertas-laborales.component.html'
})
export class PostularOfertaLaboralComponent implements OnInit,OnDestroy {
 // @ViewChild(DataTableDirective)
 @ViewChild(DataTableDirective)
  instanciaEmpleadorModelVer:EmpleadorModel;
  dominio=environment;
  instanciaOfertaEstudianteEstado:OfertaLaboralEstudianteModel;
  instanciaOfertLaboralEstudiante:OfertaLaboralEstudianteModel;
  booleanGestor:boolean=false;

  instanciaOfertaLaboralActualizar:OfertaLaboralModel;
  intanciaOfertaLaboral:OfertaLaboralModel;
  //array de data ofertas labarales
  ofertasLaborales:OfertaLaboralModel[];
  instanciaOfertaVer:OfertaLaboralModel;
  //data table
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  persons: any=[];
  datatableElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();

  instanciaDataTable:any;
  // probnado con la data table el induo
  //dtOptions: DataTables.Settings = {};
  //datatable custom json data
  miData:any=[];


  constructor(private servicioOferta:OfertasLaboralesService,
              private servicioOfertaEstudiante:OfertaLaboralEstudianteService,
              private servicioUsuario:AutenticacionUserService,
              private http: HttpClient,
              private servicioPostulante:SerivicioPostulanteService,
              private ruta_:Router) { }

  ngOnInit() {
    this.instanciaOfertaVer=new OfertaLaboralModel();
    this.intanciaOfertaLaboral=new OfertaLaboralModel();
    this.instanciaEmpleadorModelVer=new EmpleadorModel();
    this.instanciaOfertaEstudianteEstado=new OfertaLaboralEstudianteModel();
    this.instanciaOfertLaboralEstudiante=new OfertaLaboralEstudianteModel();
    this.instanciaOfertaLaboralActualizar=new OfertaLaboralModel();
    this.configurarParametrosDataTable();
    this.cargarTabla();
  }


  cargarTabla(){
    this.servicioOferta.listarOfertasValidadasGestor().subscribe(
      res=>{
        if(res['Siglas']=='OE'){
          this.ofertasLaborales =res['mensaje'];
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

  postular(externalOferta:string,nomOferta:string){
    let estadoAutentificado=this.servicioUsuario.estaAutenticado();
    if(estadoAutentificado){
        Swal({
          title: '¿Está seguro?',
          text: "Usted ha seleccionado la oferta "+nomOferta,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
        }).then((result) => {
          if (result.value) {
            Swal({
              allowOutsideClick:false,
              type:'info',
              text:'Espere por favor'
              });
              Swal.showLoading();
              this.instanciaOfertLaboralEstudiante.estado=1;
              this.instanciaOfertLaboralEstudiante.observaciones="";
              this.servicioOfertaEstudiante.postularOfertEstudiante(this.instanciaOfertLaboralEstudiante,externalOferta).subscribe(
                siHacesBien=>{
                  if(siHacesBien['Siglas']=='OE'){
                    return Swal('Postulación registrada','Usted está postulando a la oferta laboral '+nomOferta,'success');
                  }
                  return Swal('Información',siHacesBien['mensaje'],'info');
                },error=>{
                  Swal('Error',error['message'],'error');
                  
                }
              );
          }
        })
      return;
    }
    return Swal('Información','Debe iniciar su sesión ','info');
  }

  configurarParametrosDataTable(){
    this.dtOptions = dataTable;
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
}
