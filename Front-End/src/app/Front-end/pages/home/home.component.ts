import {DatePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  dominio=environment.dominio;
  today: any = Date.now();
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.today = this.datePipe.transform(this.today, 'yyyy');
  }

}
