import { Authgoogle } from './../authgoogle';
import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacaopagina',
  standalone: false,
  templateUrl: './autenticacaopagina.html',
  styleUrl: './autenticacaopagina.scss'
})
export class Autenticacaopagina {
  profile: Profile | undefined;

  constructor(private router: Router, private authgoogle: Authgoogle) { }

  navegar() {
    this.router.navigate(['/paginas/galeria']);
  }

  logar() {
    //this.authgoogle.login();
  }

  isLogado(): boolean {
    const dadosGoogle = this.authgoogle.getLoggedProfile()
    console.log('Dados google', dadosGoogle);
    this.profile = dadosGoogle;
    return !!this.profile;
  }
}
