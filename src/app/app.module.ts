import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RfsComponent } from './rfs/rfs.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RfsComponent],
  declarations: [AppComponent, HelloComponent, RfsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
