import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lugar {
  nome?: string;
  categoria?: string;
  localizacao?: string;
  urlFoto?: string;
  avaliacao?: number
}
