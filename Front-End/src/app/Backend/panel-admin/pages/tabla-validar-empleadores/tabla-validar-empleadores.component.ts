import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-validar-empleadores',
  templateUrl: './tabla-validar-empleadores.component.html',
  styleUrls: ['./tabla-validar-empleadores.component.css']
})
export class TablaValidarEmpleadoresComponent implements OnInit {
  //data table
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor() { }

  ngOnInit() {
  }

}
