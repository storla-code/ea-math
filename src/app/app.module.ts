// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PagesModule} from './pages/pages.module';
import {MatVideoModule} from 'mat-video';
import { HomeComponent } from './home/home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTreeModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        PagesModule,
        BrowserAnimationsModule,
        MatVideoModule,
      MatDatepickerModule,
      MatNativeDateModule,
    ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
