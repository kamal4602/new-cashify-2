import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  

  ngOnInit() {
  }

}
