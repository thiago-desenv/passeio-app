import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Autenticacaopagina } from './autenticacaopagina/autenticacaopagina';

const routes: Routes = [
  {
    path: '',
    component: Autenticacaopagina
  },
  {
    path: 'paginas',
    loadChildren: () => import('./template/template-module').then(m => m.TemplateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
