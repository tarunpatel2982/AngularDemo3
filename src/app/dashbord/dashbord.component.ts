import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  birthDay = new Date(1995,10,20);
  constructor() { }

  ngOnInit(): void {
  }

}
