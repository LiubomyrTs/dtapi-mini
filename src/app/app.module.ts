import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { ModalComponent } from './UI/modal/modal.component';
import { LoaderComponent } from './UI/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    ModalComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
