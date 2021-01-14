import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { UserUpdateComponent } from './pages/user-update/user-update.component';


@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserTableComponent,
    UserUpdateComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
