import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '' ,
  loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
