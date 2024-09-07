import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from "./eventos/eventos.component";
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavComponent } from "./nav/nav.component"; // Utilize provideAnimations
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CollapseModule} from 'ngx-bootstrap/collapse'
import { FormsModule } from '@angular/forms';



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
    FormsModule
    
    
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
