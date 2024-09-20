import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EventosComponent,
    HttpClientModule,
    NavComponent,
    // BrowserAnimationsModule,
    CollapseModule,
    TooltipModule,
    BsDropdownModule,
    RouterOutlet,
    RouterModule
  ],
  providers: [
    provideAnimations() // Adicione provideAnimations aqui
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ProEventosFront';
}
