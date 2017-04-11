import {NgModule} from '@angular/core';	
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { VendorsComponent } from './dashboard/vendors/vendors.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { HomeComponent } from './dashboard/home/home.component';
import { OrderdetailsComponent } from './dashboard/orders/orderdetails/orderdetails.component';
import { UserEditComponent } from './dashboard/shared/user-edit/user-edit.component';
import { UserDetailComponent } from './dashboard/shared/user-detail/user-detail.component';
import { ServicesComponent } from './dashboard/shared/services/services.component';
import { UserAddComponent } from './dashboard/shared/user-add/user-add.component';
import { UserViewDetailComponent } from './dashboard/users/user-view-detail/user-view-detail.component';

const appRoutes: Routes = [

	{path: 'dashboard', 
		component: DashboardComponent,
		children:[
		{path: 'home',component : HomeComponent,outlet:'home'},
		{path: 'users',component : UsersComponent,outlet:'users'},
		{path: 'useredit',component : UserEditComponent,outlet:'useredit'},
		{path: 'userdetail',component : UserDetailComponent,outlet:'userdetail'},
		{path: 'services',component : ServicesComponent,outlet:'services'},
		{path: 'adduser',component : UserAddComponent,outlet:'adduser'},
		{path: 'vendors',component : VendorsComponent,outlet:'vendors'},
		{path: 'viewdetail',component : UserViewDetailComponent,outlet:'viewdetail'},
		{path: 'orderdetails',component : OrderdetailsComponent,outlet:'orderdetails'},
		{path: 'orders',component : OrdersComponent,outlet:'orders'}]}

];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule{
}

export const routingComponents = [

									DashboardComponent,UsersComponent, 
									HomeComponent ,VendorsComponent, 
									OrdersComponent, OrderdetailsComponent,
									UserEditComponent,UserAddComponent,
									UserDetailComponent,ServicesComponent,
									UserViewDetailComponent
									
									];