import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import {AutenticacionUserService} from '../servicios/autenticacion-usuario.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AutentificacionGuard implements CanActivate {

  constructor(private authnServicioAdmin_:AutenticacionUserService,
              private router_:Router){}

  canActivate( ): boolean{
     if(this.authnServicioAdmin_.estaAutenticado()){
         return true;
     }else{
        Swal({
          title:'Información',
          type:'error',
          text:'La sesion ha expirado '
        });
         
         this.router_.navigateByUrl('/home')
        return false;
     }
  }

}
