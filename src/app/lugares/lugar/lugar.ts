import { CategoriaService } from './../../categorias/services/categoria';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss'
})
export class Lugar implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.categoriaService.obter().subscribe({
      next: (categoriasApi) => this.categorias = categoriasApi,
      error: erro => console.log('Ocorreu um erro ao obter categorias', erro)
    });
  }

  salvar() {
    console.log('Valores form', this.camposForm.value)
  }
}
