import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  
  ngOnInit() {
  }

}
