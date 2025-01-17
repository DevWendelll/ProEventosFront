import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable()
export class EventoService {
  baseURL = 'https://localhost:7089/Eventos';

constructor(private  http: HttpClient) { }

    public getEventos(): Observable<Evento[]>{
      return this.http.get<Evento[]>(this.baseURL);
    }

    public getEventosByTema(tema: string): Observable<Evento[]>{
      return this.http.get<Evento[]>(`${this.baseURL}/${tema}/tema`);
    }

    public getEventoById(id: number): Observable<Evento>{
      return this.http.get<Evento>(`${this.baseURL}/${id}`);
    }
}
