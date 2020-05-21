import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rt-admin',
  templateUrl: './rt-admin.component.html',
  styleUrls: ['./rt-admin.component.css']
})
export class RtAdminComponent implements OnInit {

  constructor() {  
    // window.location.href = 'http://14.231.191.91:44351/frontend/#/dashboard';
    window.location.href = 'http://localhost:4200/';
  }

  ngOnInit(): void {
  }

}
