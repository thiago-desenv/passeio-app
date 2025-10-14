import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Autenticacaopagina } from './autenticacaopagina/autenticacaopagina';
import { provideOAuthClient } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    App,
    Autenticacaopagina
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideOAuthClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
