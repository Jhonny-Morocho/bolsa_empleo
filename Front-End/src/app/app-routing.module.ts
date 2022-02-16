import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {HomeComponent} from 'src/app/Front-end/pages/home/home.component';
import {RegistroPostulanteComponent} from 'src/app/Front-end/pages/form-registro/registro-postulante/registro-postulante.component';
import {LoginAdminComponent} from 'src/app/Front-end/pages/form-login/login.component';
import {AutentificacionGuard} from './guards/autentificacion.guard';
import {MiPerfilComponent} from 'src/app/Backend/panel-admin/pages/mi-perfil-admin/mi-perfil-admin.component';
import { MiPerfilEmpleadorComponent} from 'src/app/Backend/panel-empleador/pages/mi-perfil-empleador/mi-perfil-empleador.component';
import {TablaValidarPostulantesComponent} from 'src/app/Backend/panel-admin/pages/tablas-validacion-cuentas/tablas-validar.postulantes.component';
import {RegistroEmpleadorComponent} from 'src/app/Front-end/pages/form-registro/registro-empleador/registro-empleador.component';
//panel administrador
import {MiPerfilPostulanteComponent} from 'src/app/Backend/panel-postulante/pages/mi-perfil-postulante/mi-perfil-postulante.component';
import {PostulanteOfertas} from 'src/app/Backend/panel-admin/pages/postulante-ofertas/postulantes-ofertas-encargado.component';
import {ReporteOfertasComponent} from 'src/app/Backend/panel-admin/pages/reporte-ofertas/reporte-ofertas.component';
import {FormEditarAdminComponent} from 'src/app/Backend/panel-admin/pages/editar-admin/form-editar-admin.component';
import {RegistarAdminComponent} from 'src/app/Backend/panel-admin/pages/registar-admin/form-registar-admin.component';
import {TablaUsuariosAdminComponent} from 'src/app/Backend/panel-admin/pages/tabla-usuarios-admin/tabla-usuarios-admin.component';
import {FormPublicarOfertaGestorComponent} from 'src/app/Backend/panel-admin/pages/publicar-oferta-gestor/form-publicar-oferta-gestor.component';
import {TablaPublicarOfertGestorComponent} from 'src/app/Backend/panel-admin/pages/tabla-publicar-ofert-gestor/tabla-publicar-ofert-gestor.component';
import {FormValidarOfertaLaboralComponent} from 'src/app/Backend/panel-admin/pages/validar-oferta-laboral/form-validar-oferta-laboral.component';
import {TablaValidarOfertasLaboralesComponent} from 'src/app/Backend/panel-admin/pages/tabla-validar-ofertas-laborales/tabla-validar-ofertas-laborales.component';
import {FormInfoPostulanteComponent} from 'src/app/Backend/panel-admin/pages/validacion-postulante/form-validacion-postulante.component';
import {FormularioInfoPostulanteComponent} from 'src/app/Backend/panel-postulante/pages/registro-postulante/formulario-info-postulante.component';
//empleador
import {ReactivarOfertaComponent} from 'src/app/Front-end/pages/reactivar-oferta/reactivar-oferta.component';
import {PostulantesOfertaComponent} from 'src/app/Backend/panel-empleador/pages/oferta-laboral/postulantes-oferta-empleador/postulantes-oferta-empleador';
import {EditOfertaComponent} from 'src/app/Backend/panel-empleador/pages/oferta-laboral/edit-oferta/edit-oferta.component';
import {AddOfertaComponent} from 'src/app/Backend/panel-empleador/pages/oferta-laboral/add-oferta/add-oferta.component';
import {FormValidacionEmpleadorComponent} from 'src/app/Backend/panel-admin/pages/validacion-empleador/form-validacion-empleador.component';
import {FormularioInfoEmpleadorComponent} from 'src/app/Backend/panel-empleador/pages/formulario-info-empleador/formulario-info-empleador.component';
import {OfertaLaboralComponent} from 'src/app/Backend/panel-empleador/pages/oferta-laboral/tabla-oferta-laboral/oferta-laboral.component';
//postulante
import {OfertasPostuladasComponent} from 'src/app/Backend/panel-postulante/pages/ofertas-postuladas/ofertas-postuladas.component';
//import {} from 'src/app/Backend/panel-postulante/ofertas-postuladas';
import {FormEditarTituloComponent} from 'src/app/Backend/panel-postulante/pages/titulos-academicos/form-editar-titulo/form-editar-titulo.component';
import {FormAddTituloComponent} from 'src/app/Backend/panel-postulante/pages/titulos-academicos/form-add-titulo/form-add-titulo.component';
import {TitulosAcademicosComponent} from 'src/app/Backend/panel-postulante/pages/titulos-academicos/titulos-academicos.component';
import {CursosCapacitacionesComponent} from 'src/app/Backend/panel-postulante/pages/cursos-capacitaciones/cursos-capacitaciones.component';
//cursos-capacitaciones
import {FormEditarCursoComponent} from 'src/app/Backend/panel-postulante/pages/cursos-capacitaciones/form-editar-curso/form-editar-curso.component';
import {FormAddCursoComponent} from 'src/app/Backend/panel-postulante/pages/cursos-capacitaciones/form-add-curso/form-add-curso.component';
import { TablaValidarEmpleadoresComponent } from './Backend/panel-admin/pages/tabla-validar-empleadores/tabla-validar-empleadores.component';
import { TableroAdminComponent } from './Backend/panel-admin/pages/tablero-admin/tablero-admin.component';
import { TableroPostulanteComponent } from './Backend/panel-postulante/pages/tablero-postulante/tablero-postulante.component';
import { TableroEmpleadorComponent } from './Backend/panel-empleador/pages/tablero-empleador/tablero-empleador.component';


const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'registro-postulante', component: RegistroPostulanteComponent },
  { path: 'registro-empleador', component: RegistroEmpleadorComponent },
  { path: 'login' , component: LoginAdminComponent },

  //rutas del admistrador
  { path: 'reactivar-oferta-laboral/:external_of' , component: ReactivarOfertaComponent},

  { path: 'panel-admin' , component: TableroAdminComponent ,canActivate:[AutentificacionGuard],children:[
    { path: 'publicar-oferta-gestor' , component: TablaPublicarOfertGestorComponent},
    { path: 'gestionar-usuarios-admin' , component:  TablaUsuariosAdminComponent},
    { path: 'mi-perfil' , component: MiPerfilComponent},
    { path: 'editar-admin/:external_us' , component: FormEditarAdminComponent},
    { path: 'filtrar-postulantes/:external_of' , component: PostulanteOfertas},
    { path: 'reporte-ofertas' , component: ReporteOfertasComponent},
    { path: 'registar-admin' , component: RegistarAdminComponent},
    { path: 'form-validar-ofertaLaboral/:external_of' , component: FormValidarOfertaLaboralComponent },
    { path: 'form-publicar-ofertaLaboral/:external_of' , component: FormPublicarOfertaGestorComponent },
    { path: 'validar-oferta-laboral' , component: TablaValidarOfertasLaboralesComponent},
    { path: 'tabla-validar-empleador' , component: TablaValidarEmpleadoresComponent },
    { path: 'tabla-validar-postulantes' , component: TablaValidarPostulantesComponent },
    { path: 'form-validar-postulante/:external_es' , component: FormInfoPostulanteComponent },
    { path: 'form-validar-empleador/:external_em' , component: FormValidacionEmpleadorComponent },
    //rutas del postulante
  ]},
  { path: 'panel-empleador' , component: TableroEmpleadorComponent ,canActivate:[AutentificacionGuard],children:[
    { path: 'postulante-oferta/:external_of' , component: PostulantesOfertaComponent },
    { path: 'edit-oferta-laboral/:external_of' , component: EditOfertaComponent },
    { path: 'form-info-empleador' , component: FormularioInfoEmpleadorComponent },
    { path: 'oferta-laboral' , component: OfertaLaboralComponent, data: {activeTab: 'home'}},
    { path: 'add-ferta-laboral' , component: AddOfertaComponent },
    { path: 'mi-perfil' , component: MiPerfilEmpleadorComponent},
  ]},
  { path: 'panel-postulante' , component: TableroPostulanteComponent ,canActivate:[AutentificacionGuard],children:[
    { path: 'ofertas-postuladas' , component: OfertasPostuladasComponent },
    { path: 'form-info-postulante' , component: FormularioInfoPostulanteComponent },
    { path: 'titulos-academicos' , component: TitulosAcademicosComponent },
    { path: 'add-titulo' , component: FormAddTituloComponent },
    { path: 'edit-titulo/:external_ti' , component: FormEditarTituloComponent },
    { path: 'cursos-capacitaciones' , component: CursosCapacitacionesComponent },
    { path: 'add-curso-capacitacion' , component: FormAddCursoComponent },
    { path: 'edit-curso-capacitacion/:external_cu' , component: FormEditarCursoComponent },
    { path: 'mi-perfil' , component: MiPerfilPostulanteComponent},
  ]},
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  // si quiero exportar estas rutas para usarlas en otro modulo entonces coloco esto
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
