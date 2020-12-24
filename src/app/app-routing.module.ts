import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserTableComponent } from './components/user-table/user-table.component';

const routes: Routes = [
  {
    path: '',
    component: UserTableComponent,
  },
  {
    path: 'create',
    component: UserCreateComponent,
  },
  {
    path: 'update/:id',
    component: UserCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
