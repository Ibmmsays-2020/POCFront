import { RigestrationComponent } from './component/rigestration/rigestration.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: ' ' , component: LoginComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'Rigestration' , component: RigestrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
