import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LayoutProperties } from './layoutProperties';
import { filter, map } from 'rxjs';
import { Authgoogle } from '../../authgoogle';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {
  props: LayoutProperties = { titulo: '', subTitulo: '' };

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private oAuthService: Authgoogle) {}

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(() => this.activatedRoute.firstChild !== null),
      map(() => this.obterPropriedades())
    ).subscribe((props: LayoutProperties) => this.props = props);
  }

  obterPropriedades(): LayoutProperties {
    let rotaFilha = this.activatedRoute.firstChild;

    while(rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as LayoutProperties;
  }

  logout() {
    //this.oAuthService.logout();
  }
}
