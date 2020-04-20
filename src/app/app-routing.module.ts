import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FallbackComponent} from './fallback/fallback.component';





const routes: Routes = [
  { path: '1.1 The Order of Operations', component:  FallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
