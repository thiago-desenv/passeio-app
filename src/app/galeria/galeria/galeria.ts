import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/services/lugar';
import { CategoriaService } from '../../categorias/services/categoria';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss'
})
export class Galeria implements OnInit {
  lugares: Lugar[] = [];
  categorias: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private serviceLugares: LugarService,
    private serviceCategoria: CategoriaService
  ) { }

  ngOnInit(): void {
    this.serviceLugares.obter().subscribe({
      next: lugares => this.lugares = lugares,
      error: erro => console.log('Ocorreu um erro ao obter os lugares', erro)
    });

    this.serviceCategoria.obter().subscribe({
      next: categorias => this.categorias = categorias,
      error: erro => console.log('Ocorreu um erro ao obter as categorias', erro)
    });
  }

  getEstrelas(lugar: Lugar): string {
    const qtdEstrelaCheia = '&#9733;'.repeat(lugar.avaliacao || 0);
    const qtdEstrelaVazia = '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
    return qtdEstrelaCheia + qtdEstrelaVazia;
  }

  obterLugaresFiltrado() {
    this.serviceLugares.obterLugaresFiltrado(this.nomeFiltro, this.categoriaFiltro).subscribe({
      next: lugares => this.lugares = lugares,
      error: erro => console.log('Ocorreu um erro ao obter os lugares filtrados', erro)
    });
  }
}
