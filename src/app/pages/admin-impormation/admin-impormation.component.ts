import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin-impormation',
  templateUrl: './admin-impormation.component.html',
  styleUrls: ['./admin-impormation.component.css']
})
export class AdminImpormationComponent implements OnInit {
  isShowFormUser = false;
  constructor() { }

  ngOnInit(): void {
  }
  hoantat(){
    this.isShowFormUser = false;
  }

}
