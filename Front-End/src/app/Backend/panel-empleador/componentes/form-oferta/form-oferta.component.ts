import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaLaboralModel } from 'src/app/models/oferta-laboral.models';
import { OfertasLaboralesService } from 'src/app/servicios/oferta-laboral.service';
import { summernoteConfig } from 'src/app/templateSumerNote/configSumerNote';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.component.html',
  styleUrls: ['./form-oferta.component.css']
})
export class FormOfertaComponent implements OnInit {
  formOfertaLaboral:FormGroup;
  configSumberNote:any=summernoteConfig;
  ofertaRevisad:boolean;
  externalOf:string="";
  esRegistroNuevo:boolean=true;
  instanciaOfertaLaboral:OfertaLaboralModel;
  constructor(private activateRotue:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder,
    private servicioOfertaLaboral:OfertasLaboralesService) {
      this.crearFormulario();
  }

  ngOnInit() {
    this.instanciaOfertaLaboral=new OfertaLaboralModel();
    //verificar si existe algo en la ruta si existe entonces va actulizar el registro
    this.activateRotue.params.subscribe(params=> this.externalOf=params['external_of']);
    if(this.externalOf){
      this.esRegistroNuevo=false;
      this.formOfertaLaboral.get('puesto').disable();
      this.formOfertaLaboral.get('descripcion').disable();
      this.formOfertaLaboral.get('lugar').disable();
      this.formOfertaLaboral.get('requisitos').disable();
      //this.formOfertaLaboral.get('puesto').disable();
      this.cargarDatosOfertaLaboral();
      return;
    }
    this.ofertaRevisad=false;
  }
  crearFormulario(){
    this.formOfertaLaboral=this.formBuilder.group({
      puesto:['',[Validators.required,Validators.maxLength(50)]],
      descripcion:['',[Validators.required,Validators.maxLength(200)]],
      lugar:['',[Validators.required,Validators.maxLength(100)]],
      requisitos:['',[Validators.required,Validators.maxLength(500)]],
    });
  }
  cargarDatosOfertaLaboral(){
    //obtener los parametros de la ulr para tener los datos del empleador
    //consumir el servicio
    this.servicioOfertaLaboral.obtenerOfertaLaboralExternal_of(this.externalOf).subscribe(
      res=>{
          if(res["Siglas"]=="OE"){
            this.instanciaOfertaLaboral.estado=1;
            this.instanciaOfertaLaboral.obervaciones="";
            this.instanciaOfertaLaboral.puesto=res["mensaje"]['puesto'];
            this.instanciaOfertaLaboral.descripcion=res["mensaje"]['descripcion'];
            this.instanciaOfertaLaboral.lugar=res["mensaje"]['lugar'];
            this.instanciaOfertaLaboral.requisitos=res["mensaje"]['requisitos'];
            this.instanciaOfertaLaboral.external_of=res["mensaje"]['external_of'];
            this.instanciaOfertaLaboral.obervaciones=res["mensaje"]['obervaciones'];
            this.instanciaOfertaLaboral.estado=res["mensaje"]['estado'];
            //cargamos los datos en el formulario
            this.formOfertaLaboral.setValue(
              {
              puesto:this.instanciaOfertaLaboral.puesto,
              descripcion:this.instanciaOfertaLaboral.descripcion,
              lugar:this.instanciaOfertaLaboral.lugar,
              requisitos:this.instanciaOfertaLaboral.requisitos
              }
            );
            // si ahun no esta validada la oferta laboral entonces se pone en disable
            if(this.instanciaOfertaLaboral.obervaciones.length>0 &&  this.instanciaOfertaLaboral.estado==1){
              this.ofertaRevisad=true;
            }else{
              this.ofertaRevisad=false;
            }
          }else{
            Swal('Información', res['mensaje'], 'info');
          }
      },peroSiTenemosErro=>{
        Swal('Error', peroSiTenemosErro['message'], 'error')
      }
    )
  }
  agregarOferta(){
    if(this.formOfertaLaboral.invalid ){
      const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      toast({
        type: 'error',
        title: 'Debe llenar todos los campos correctamente'
      })
      return Object.values(this.formOfertaLaboral.controls).forEach(contol=>{
        contol.markAsTouched();
      });
     }
     Swal({
      allowOutsideClick:false,
      type:'info',
      text:'Espere por favor'
      });
      Swal.showLoading();
      this.instanciaOfertaLaboral.estado=1;
      this.instanciaOfertaLaboral.obervaciones="";
      this.instanciaOfertaLaboral.puesto=this.formOfertaLaboral.value.puesto;
      this.instanciaOfertaLaboral.descripcion=this.formOfertaLaboral.value.descripcion;
      this.instanciaOfertaLaboral.lugar=this.formOfertaLaboral.value.lugar;
      this.instanciaOfertaLaboral.requisitos=this.formOfertaLaboral.value.requisitos;
      this.servicioOfertaLaboral.crearOfertasLaborales(this.instanciaOfertaLaboral).subscribe(
       siHaceBien=>{
          console.log(siHaceBien);
          if(siHaceBien['Siglas']=="OE"){
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
            this.router.navigateByUrl('panel-empleador/oferta-laboral');
          }else{
            Swal('Información', siHaceBien['mensaje'], 'info')
          }
       },error=>{
         Swal('Error', error['mensaje'], 'error')
       }
     );
  }
  editarOferta(){
    if(this.formOfertaLaboral.invalid){
      const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      toast({
        type: 'error',
        title: 'Debe llenar todos los campos correctamente'
      })
      return Object.values(this.formOfertaLaboral.controls).forEach(contol=>{
        contol.markAsTouched();
      });
    }
    Swal({
      allowOutsideClick:false,
      type:'info',
      text:'Espere por favor'
    });
    Swal.showLoading();
    this.instanciaOfertaLaboral.estado=1;
    this.instanciaOfertaLaboral.obervaciones="";
    this.instanciaOfertaLaboral.puesto=this.formOfertaLaboral.value.puesto;
    this.instanciaOfertaLaboral.descripcion=this.formOfertaLaboral.value.descripcion;
    this.instanciaOfertaLaboral.lugar=this.formOfertaLaboral.value.lugar;
    this.instanciaOfertaLaboral.requisitos=this.formOfertaLaboral.value.requisitos;

    this.servicioOfertaLaboral.actulizarDatosOfertaLaboral(this.instanciaOfertaLaboral).subscribe(
      siHacesBien=>{
        Swal.close();
        if(siHacesBien['Siglas']=="OE"){
          const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000
          });
          toast({
            type: 'success',
            title: 'Actualizado'
          })
          this.router.navigateByUrl("/panel-empleador/oferta-laboral");
        }else{
          Swal('Información', siHacesBien['mensaje'], 'info')
        }

      },error=>{
        Swal('Error', error['mensaje'], 'error')
      }

    );
  }
  onSubMitOfertaLaboral(){
    if(this.esRegistroNuevo){
      this.agregarOferta();
      return;
    }
    if(!this.esRegistroNuevo){
      this.editarOferta();
      return;
    }
    //this.formOfertaLaboral.get('requisitos').setValue($('#compose-textarea').val());

  }
  get puestoNoValido(){
    return this.formOfertaLaboral.get('puesto').invalid &&  this.formOfertaLaboral.get('puesto').touched;
  }



  get descripcionNoValido(){
    return this.formOfertaLaboral.get('descripcion').invalid &&  this.formOfertaLaboral.get('descripcion').touched;
  }



  get lugarNoValido(){
    return this.formOfertaLaboral.get('lugar').invalid &&  this.formOfertaLaboral.get('lugar').touched;
  }

  get requisitosNoValido(){
    return this.formOfertaLaboral.get('requisitos').invalid &&  this.formOfertaLaboral.get('requisitos').touched;
  }

   get requisitosLimite(){
    return ((this.formOfertaLaboral.get('requisitos').value).length)>500;
  }
  get requisitosVacio(){
    return this.formOfertaLaboral.get('requisitos').value;
  }
}

