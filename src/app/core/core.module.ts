import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PageContentComponent } from './component/page-content/page-content.component';
import { PageLayoutComponent } from './component/page-layout/page-layout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [PageContentComponent, PageLayoutComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
