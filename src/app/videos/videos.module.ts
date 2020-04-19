import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideosComponent} from './videos.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [VideosComponent],
  exports: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule
  ]
})
export class VideosModule { }
