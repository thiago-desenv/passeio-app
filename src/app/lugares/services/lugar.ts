import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugar } from '../lugar';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  apiUrl: string = environment.apiUrl + 'lugares';

  constructor(private http: HttpClient) { }

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.apiUrl, lugar);
  }

  obter(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.apiUrl);
  }

  obterLugaresFiltrado(nome: string, categoria: string): Observable<Lugar[]> {
    let params = new HttpParams();
    if(nome) {
      params = params.set('nome_like', nome);
    }

    if(categoria && categoria !== '-1') {
      params = params.set('categoria', categoria);
    }

    return this.http.get<Lugar[]>(this.apiUrl, {
      params: params
    });
  }
}
