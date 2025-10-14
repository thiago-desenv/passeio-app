import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Autenticacaopagina } from './autenticacaopagina/autenticacaopagina';
import { authGuard } from './auth-guard';

const routes: Routes = [
  {
    path: '',
    component: Autenticacaopagina
  },
  {
    path: 'paginas',
    loadChildren: () => import('./template/template-module').then(m => m.TemplateModule),
    //canActivate: [ authGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
