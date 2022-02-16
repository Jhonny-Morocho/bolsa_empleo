import { Component, OnInit } from '@angular/core';
import {SerivicioDocente} from 'src/app/servicios/docente.service';
import {DocenteModel} from 'src/app/models/docente.models';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { dataTable } from 'src/app/templateDataTable/configDataTable';
declare var $:any;
@Component({
  selector: 'app-tabla-usuarios-admin',
  templateUrl: './tabla-usuarios-admin.component.html'
})
export class TablaUsuariosAdminComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  arrayDocentes:DocenteModel[]=[];
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private SerivicioDocente:SerivicioDocente) { }

  ngOnInit() {
    this.configurarParametrosDataTable();
    this.cargarTabla();

  }
  configurarParametrosDataTable(){
    this.dtOptions = dataTable;
  }
  cargarTabla(){
    //listar todos los usuarioas admistradores
    this.SerivicioDocente.listarDocentes().subscribe(
      res=>{
        if(res['Siglas']=='OE'){
          this.arrayDocentes =res['mensaje'];
          this.dtTrigger.next();
          return;
        }
        Swal('Información',res['mensaje'], 'info');
        console.log(res);
        //this.arrayDocentes=res;
        this.dtTrigger.next();
      },siHacesMal=>{
        Swal('Error', siHacesMal['mensaje'], 'error');
      }
    );
  }

}
