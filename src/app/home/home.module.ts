import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent} from 'ap-angular2-fullcalendar';
import {SubtractingIntegers} from '../pages/pages.component';



@NgModule({
  declarations: [
    SubtractingIntegers
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
