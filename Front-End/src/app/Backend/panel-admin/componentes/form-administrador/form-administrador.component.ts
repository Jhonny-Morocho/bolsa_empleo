import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteModel } from 'src/app/models/docente.models';
import { SerivicioDocente } from 'src/app/servicios/docente.service';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-administrador',
  templateUrl: './form-administrador.component.html',
  styleUrls: ['./form-administrador.component.css']
})
export class FormAdministradorComponent implements OnInit {
  instanciaDocente:DocenteModel;
  formAdmin:FormGroup;
  esRegistroNuevo:boolean=true;
  externalUs:string="";
  constructor(private formBuilder:FormBuilder,
    private servicioDocente:SerivicioDocente,
    private validadorPersonalizado:ValidadoresService,
    private activateRotue:ActivatedRoute,
    private servicioRouter:Router) {
    this.crearFormulario();
   }

  ngOnInit() {
    this.instanciaDocente=new DocenteModel();
    this.instanciaDocente.estado=1;
    //verificar si existe algo en la ruta si existe entonces va actulizar el registro
    this.activateRotue.params.subscribe(params=> this.externalUs=params['external_us']);
    if(this.externalUs){
      this.esRegistroNuevo=false;
      this.formAdmin.get('correo').disable();
      this.formAdmin.get('password').setValidators(null);
      this.formAdmin.get('password2').setValidators(null);
      this.cargarFormularioDocente();
      return;
    }
  }
  cargarFormularioDocente(){
    this.servicioDocente.obtenerDocenteExternal_us(this.externalUs).subscribe(
      res=>{
        if(res['Siglas']=='OE'){
          this.instanciaDocente.nombre=res['mensaje']['nombre'];
          this.instanciaDocente.apellido=res['mensaje']['apellido'];
          this.instanciaDocente.correo=res['mensaje']['correo'];
          this.instanciaDocente.tipoUsuario=res['mensaje']['tipoUsuario'];
          this.instanciaDocente.estado=res['mensaje']['estado'];
          this.instanciaDocente.password="";
          //cargar los datos en el formulario
          this.formAdmin.reset({
            nombre:this.instanciaDocente.nombre,
            apellido:this.instanciaDocente.apellido,
            correo:this.instanciaDocente.correo,
            password:this.instanciaDocente.password,
            password2:this.instanciaDocente.password,
            tipoUsuario:this.instanciaDocente.tipoUsuario
          });

        }else{
          Swal('Información',res['mensaje'], 'info');
        }
      },siHaceMal=>{
        Swal('Error',siHaceMal['message'], 'error');
      }
    );
  }

  crearFormulario(){
    this.formAdmin=this.formBuilder.group({
      nombre:['',[Validators.required,Validators.maxLength(20)]],
      apellido:['',[Validators.required,Validators.maxLength(20)]],
      correo:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password:['',[Validators.required,Validators.maxLength(10)]],
      password2:['',[Validators.required]],
      tipoUsuario:['',[Validators.required]]
    },{
      validators: this.validadorPersonalizado.validarPasswordIguales('password','password2')
    });
  }
  agregarDocente(){
    if(this.formAdmin.invalid){
      return Object.values(this.formAdmin.controls).forEach(contol=>{
        contol.markAsTouched();
      });
    }
    Swal({
      allowOutsideClick:false,
      type:'info',
      text:'Espere por favor'
    });
    //envios los datos ya validados
    this.instanciaDocente.nombre=this.formAdmin.value.nombre;
    this.instanciaDocente.apellido=this.formAdmin.value.apellido;
    this.instanciaDocente.correo=this.formAdmin.value.correo;
    this.instanciaDocente.password=this.formAdmin.value.password;
    this.instanciaDocente.tipoUsuario=this.formAdmin.value.tipoUsuario;
    Swal.showLoading();
    //this.instanciaDocente.estado=1;
    this.servicioDocente.crearDocente(this.instanciaDocente).subscribe(
      siHacesBien=>{
        if(siHacesBien['Siglas']=="OE"){
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
          this.servicioRouter.navigateByUrl('/panel-admin/gestionar-usuarios-admin');
        }else{
          Swal({title:'Error',type:'error',text:siHacesBien['mensaje']});
        }
      },siHacesMal=>{
        Swal('Error',siHacesMal['mensaje'], 'error');
      }
    );
  }

  editarDocente(){
    if(this.formAdmin.invalid){
      return Object.values(this.formAdmin.controls).forEach(control=>{
        console.log(control);
        control.markAsTouched();
      });
    }
    Swal({
      allowOutsideClick:false,
      type:'info',
      text:'Espere por favor'
    });
    //envios los datos ya validados
    this.instanciaDocente.nombre=this.formAdmin.value.nombre;
    this.instanciaDocente.apellido=this.formAdmin.value.apellido;
    this.instanciaDocente.correo=this.formAdmin.value.correo;
    // si viene vacio entonces no actuliza
    this.instanciaDocente.password=this.formAdmin.value.password;
    this.instanciaDocente.tipoUsuario=this.formAdmin.value.tipoUsuario;
    Swal.showLoading();
    //this.instanciaDocente.estado=1;
    this.servicioDocente.actulizarDatosDocente(this.instanciaDocente,this.externalUs).subscribe(
      res=>{
        console.log(res);
        if(res['Siglas']=="OE"){
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
          this.servicioRouter.navigateByUrl('/panel-admin/gestionar-usuarios-admin');
        }else{
          Swal({title:'Información',type:'info',text:res['mensaje']});
        }
      },siHacesMal=>{
        Swal('Error',siHacesMal['message'], 'error');
      }
    );
  }

  onSubmitRegistrarAdmin(){
    if(this.esRegistroNuevo){
        this.agregarDocente();
        return;
    }
    if(!this.esRegistroNuevo){
      this.editarDocente();
      return;
    }
  }

  estadoOferta(){
    if(this.instanciaDocente.estado==1){
      return true;
    }
    if(this.instanciaDocente.estado==0){
      return false;
    }
  }
  onChangeOferta(event){
    if(event==true){
      this.instanciaDocente.estado=1;
    }
    if(event==false){
      this.instanciaDocente.estado=0;
    }
  }
  get nomNoValido(){
    return this.formAdmin.get('nombre').invalid && this.formAdmin.get('nombre').touched ;
  }
  get apellidoNoValido(){
    return this.formAdmin.get('apellido').invalid && this.formAdmin.get('apellido').touched ;
  }

  get correoNoValido(){
    return this.formAdmin.get('correo').invalid && this.formAdmin.get('correo').touched ;
  }
  get correoVacio(){
    return this.formAdmin.get('correo').value ;
  }

  get passwordNoValido(){
    return this.formAdmin.get('password').invalid && this.formAdmin.get('password').touched ;
  }
  get passwordNoValido2(){
    return this.formAdmin.get('password2').invalid && this.formAdmin.get('password2').touched  ;
  }
  get tipoUsuarioNoValido(){
    return this.formAdmin.get('tipoUsuario').invalid && this.formAdmin.get('tipoUsuario').touched  ;
  }
}
