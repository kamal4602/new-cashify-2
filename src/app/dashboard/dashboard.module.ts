import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UserEditComponent } from './shared/user-edit/user-edit.component';
import { UserAddComponent } from './shared/user-add/user-add.component';
import { UserDetailComponent } from './shared/user-detail/user-detail.component';
import { ServicesComponent } from './shared/services/services.component';
import { UserViewDetailComponent } from './users/user-view-detail/user-view-detail.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, UserEditComponent, UserAddComponent, UserDetailComponent, ServicesComponent, UserViewDetailComponent]
})
export class DashboardModule { }
