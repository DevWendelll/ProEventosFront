import { Compiler, Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/Evento';
import { DateTimeFormatPipe } from '../helps/DateTimeFormat.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, DateTimeFormatPipe, TooltipModule, BsDropdownModule, ModalModule],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [EventoService]
})


export class EventosComponent implements OnInit{
  modalRef = {} as BsModalRef;
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];

  public larguraImagem: number = 50;
  public margemImagem: number =2;
  public mostrarImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string)
  {
    this._filtroLista = value;
    this.eventosFiltrados = this._filtroLista ? this.filtrarEventos(this.filtroLista): this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[]
  {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local:string; }) =>
      evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }


  constructor(private eventoService: EventoService,
    private modalService: BsModalService

  ) {}

  public ngOnInit(): void {
    this.getEventos();
  }

 
  public alterarImagem(): void{
    this.mostrarImagem= !this.mostrarImagem;
  }


  public getEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos;
      },
      error: error => console.log(error)
    });
  }

 openModal(template: TemplateRef<any>):void{
this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
}
 
confirm(): void {
  this.modalRef.hide();
}
 
   decline(): void {
     this.modalRef.hide();
   } 
}