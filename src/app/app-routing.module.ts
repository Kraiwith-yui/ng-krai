import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./pages/home/home.module`).then(C => C.HomeModule),
  },
  {
    path: 'user',
    loadChildren: () => import(`./pages/user/user.module`).then(C => C.UserModule),
  },
  {
    path: 'profile',
    loadChildren: () => import(`./pages/profile/profile.module`).then(C => C.ProfileModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
