import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RfsComponent } from './rfs/rfs.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [AppComponent, RfsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
