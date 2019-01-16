import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBukuTabunganComponent } from './data-buku-tabungan/data-buku-tabungan.component';
import { FormBukuTabunganComponent } from './form-buku-tabungan/form-buku-tabungan.component';
import { FromEditTabunganComponent } from './from-edit-tabungan/from-edit-tabungan.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBukuTabunganComponent,
    FormBukuTabunganComponent,
    FromEditTabunganComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
