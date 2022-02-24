import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaLaboralModel } from 'src/app/models/oferta-laboral.models';
import { OfertasLaboralesService } from 'src/app/servicios/oferta-laboral.service';
import {environment} from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-reactivar-oferta',
  templateUrl: './reactivar-oferta.component.html'
})
export class ReactivarOfertaComponent implements OnInit {
  dominio=environment.dominio;
  ofertaEncontrada:boolean;
  instanciaOfertaLaboral:OfertaLaboralModel;
  constructor(private router:Router,
              private servicioOfertaLaboral:OfertasLaboralesService,
              private _activateRoute:ActivatedRoute,) {

              }

  ngOnInit() {
    this.cargarDatosOfertaLaboral();
  }
  fActualizarEstadoOferta(formuarlio:NgForm){
    Swal({
      allowOutsideClick:false,
      type:'info',
      text:'Espere por favor'
    });
    Swal.showLoading();
    this.servicioOfertaLaboral.reactivarOfertaLaboral(this.instanciaOfertaLaboral).subscribe(
      res=>{
          Swal.close();
          if(res['Siglas']=="OE"){
          Swal('Registrado', 'Información Registrada con Exito', 'success');
          }else{
            Swal('Información', res['mensaje'], 'info')
          }
      },siHaceMal=>{
        Swal('Error', siHaceMal['message'], 'error')
      }
    );
  }

  cargarDatosOfertaLaboral(){
    this.instanciaOfertaLaboral=new OfertaLaboralModel();
    //obtener los parametros de la ulr para tener los datos del empleador
    this._activateRoute.params.subscribe(params=>{
      //consumir el servicio
      this.servicioOfertaLaboral.obtenerOfertaLaboralExternal_of(params['external_of']).subscribe(
        res=>{
            //encontro estudiante estado==0
            if(res["Siglas"]=="OE"){
              this.ofertaEncontrada=true;
              this.instanciaOfertaLaboral.puesto=res["mensaje"]['puesto'];
              this.instanciaOfertaLaboral.descripcion=res["mensaje"]['descripcion'];
              this.instanciaOfertaLaboral.lugar=res["mensaje"]['lugar'];
              this.instanciaOfertaLaboral.correo=res["mensaje"]['correo'];
              this.instanciaOfertaLaboral.requisitos=res["mensaje"]['requisitos'];
              this.instanciaOfertaLaboral.external_of=res["mensaje"]['external_of'];
              this.instanciaOfertaLaboral.obervaciones=res["mensaje"]['obervaciones'];
              this.instanciaOfertaLaboral.estado=res["mensaje"]['estado'];
              this.instanciaOfertaLaboral.razon_empresa=res["mensaje"]['razon_empresa'];
            }else{
              Swal('Información',res['mensaje'], 'info');
              this.ofertaEncontrada=false;
            }
        },peroSiTenemosErro=>{
          Swal('Error',peroSiTenemosErro['mensaje'], 'error');
        }
      )
    });
  }

  estadoOferta(){
    if(this.instanciaOfertaLaboral.estado==3){
      return true;
    }
    //oferta finalizada
    if(this.instanciaOfertaLaboral.estado==4){
      return false;
    }
  }
  onChangeOferta(event){
    if(event){
      this.instanciaOfertaLaboral.estado=3;
      return;
    }
    this.instanciaOfertaLaboral.estado=4;
  }

}
