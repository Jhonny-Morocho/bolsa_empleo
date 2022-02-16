import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  versionModulo=environment.versionModulo;
  today: any = Date.now();
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.today = this.datePipe.transform(this.today, 'yyyy');
  }

}
