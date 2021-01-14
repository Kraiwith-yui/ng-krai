import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: UserTableComponent },
      { path: 'create', component: UserCreateComponent },
      { path: 'update/:userId', component: UserUpdateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
