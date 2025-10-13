import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugar } from '../lugar';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  constructor(private http: HttpClient) { }

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>('http://localhost:3000/lugares', lugar);
  }

  obter(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>('http://localhost:3000/lugares');
  }

  obterLugaresFiltrado(nome: string, categoria: string): Observable<Lugar[]> {
    let params = new HttpParams();
    if(nome) {
      params = params.set('nome_like', nome);
    }

    if(categoria && categoria !== '-1') {
      params = params.set('categoria', categoria);
    }

    console.log('Parâmetros requisição', params);

    return this.http.get<Lugar[]>('http://localhost:3000/lugares', {
      params: params
    });
  }
}
