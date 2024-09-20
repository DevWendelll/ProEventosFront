import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,  // Tornar o componente standalone
  imports: [CommonModule, CollapseModule, TooltipModule, BsDropdownModule],  // Importar CommonModule para usar diretivas básicas como *ngIf e *ngFor
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}