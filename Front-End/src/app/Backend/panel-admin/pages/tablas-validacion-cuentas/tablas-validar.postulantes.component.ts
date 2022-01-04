import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {PostulanteModel} from 'src/app/models/postulante.models';
import {SerivicioPostulanteService} from 'src/app/servicios/serivicio-postulante.service';

import { dataTable } from 'src/app/templateDataTable/configDataTable';
import { DataTableDirective } from 'angular-datatables';
import { ViewChild } from '@angular/core';
declare var JQuery:any;
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
// ========= valoracion =========
declare var $:any;

@Component({
  selector: 'app-tabla-validar-postulantes',
  templateUrl: './tablas-validar-cuentas.component.html'
})
export class TablaValidarPostulantesComponent implements OnInit,OnDestroy {
  //data table
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();



  estudiante:PostulanteModel[]=[];


  activarBotonCalificarModal=false;

  tipoUsuarioSecretaria:boolean=false;
  tipoUsuarioEncargado:boolean=false;

  constructor(private servicioPostulante_:SerivicioPostulanteService,
    private router:Router
               ) { }

  ngOnInit():void {
    this.configurarParametrosDataTable();
    this.cargarTablaperfilUsuario();
  }


  configurarParametrosDataTable(){
    this.dtOptions = dataTable;
  }





  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
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
  cargarTablaperfilUsuario(){
    //esat usando la pagina la secretaria
    this.servicioPostulante_.listarPostulantes().subscribe(
      siHacesBien=>{
        this.estudiante =siHacesBien;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      },
      (peroSiTenemosErro)=>{
          Swal('Error',peroSiTenemosErro['statusText'], 'error');
        }
    );


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

}


