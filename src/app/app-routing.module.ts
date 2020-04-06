import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';


const routes: Routes = [
  { path: 'accounts', component: TestComponent},
  { path: 'contacts', component: TestComponent},
  { path: 'activities', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
