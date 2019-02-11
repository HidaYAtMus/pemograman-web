import {TableService} from './table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Hidayat Nur Musthofa';
  alamat = 'jl. Soehat, griya santha No.A67'
  tanggal = Date.now();
  hby: any[];
  constructor(private tableserve:TableService){}

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hby = this.tableserve.getMus();
  }
}
