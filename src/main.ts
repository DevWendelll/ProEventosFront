import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

// Se você estiver usando o Angular com standalone components, você deve usar `bootstrapApplication` em vez de `bootstrapModule`
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      CollapseModule.forRoot()
    ),
    provideAnimations()
  ]
})
.catch(err => console.error(err));