import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './component/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RigestrationComponent } from './component/rigestration/rigestration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperadminComponent } from './component/superadmin/superadmin.component';
import { AdminComponent } from './component/admin/admin.component';




@NgModule({
  declarations: [RigestrationComponent, LoginComponent, SuperadminComponent, AdminComponent ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class AuthenticationModule { }
