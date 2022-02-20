import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import {validateRuc} from 'src/app/ValidarRuc/validarRuc';
//importo libreria para poder jugar con las fechas
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noFechaMayorActualPostulante(control: FormControl):{[s:string]:boolean}{
    let fechaActual=moment().format("YYYY-MM-DD");
    let fechaMinima='1905-01-01';
    if(fechaActual<=control.value ||  fechaMinima >= control.value){
      return{
        noFechaMayorActualPostulante:true
      }
    }else{
      return null;
    }
  }
  validarFechasInicioFinalizacion(fecha_inicio:string,fecha_culminacion:string){
    return (formGroup:FormGroup)=>{
      const dateInicio=formGroup.controls[fecha_inicio];
      const dateFinal=formGroup.controls[fecha_culminacion];
      if(dateFinal.value>=dateInicio.value){
        dateFinal.setErrors(null);
      }else{
        dateFinal.setErrors({DateNoEsMayor:true});
      }
    }
  }
  validarPasswordIguales(password1:string,password2:string){
    return (formGroup:FormGroup)=>{
      const passwordInicio=formGroup.controls[password1];
      const passwordFinal=formGroup.controls[password2];
      if(passwordFinal.value==passwordInicio.value){
        passwordFinal.setErrors(null);
      }else{
        passwordFinal.setErrors({PasswordNoIgual:true});
      }
    }
  }
  soloTexto(control: FormControl):{[s:string]:boolean}{
      const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
      if (!pattern.test(control.value)){
        // si estra entonces no cumple con la validacion
        return{
          soloTexto:true
        }
      }
      return null
  }
  soloTextoPuntoRazonEmpresa(control: FormControl):{[s:string]:boolean}{
    const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ., ]+$', 'i');
    if (!pattern.test(control.value)){
      // si estra entonces no cumple con la validacion
      return{
        soloTextoPuntoRazonEmpresa:true
      }
    }
    return null
  }
  soloNumeros(control: FormControl):{[s:string]:boolean}{
    const pattern = new RegExp('^[0-9]*$');
    if (!pattern.test(control.value)){
      return{
        soloNumeros:true
      }
    }
    return null;
  }
  // ================ VALIDAR RUC ==============
  // ================ VALIDAR RUC ==============
  rucNoValido(control: FormControl):{[s:string]:boolean}{
    const ruc=control.value;
    if (!validateRuc(ruc)){
      return{
        rucNoValido:true
      }
    }
    return null;
  }

}
