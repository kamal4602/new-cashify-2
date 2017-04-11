import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
@Injectable()
export class CommonService {

  constructor(private router: Router,private _http : Http) { }

  nav(route_name){   
    this.router.navigateByUrl("/dashboard/(" + route_name + ":" + route_name +")" ) ;
  }
}
