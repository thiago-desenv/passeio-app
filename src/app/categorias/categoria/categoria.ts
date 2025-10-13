import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../services/categoria';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {
  camposForm: FormGroup;

  constructor(private service: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid) {
      this.service.salvar(this.camposForm.value).subscribe({
        next: () => {
          this.camposForm.reset();
        },
        error: erro => console.log('Ocorreu um erro ao salvar a categoria', erro)
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo.touched && campo?.errors?.['required'];
  }
}
