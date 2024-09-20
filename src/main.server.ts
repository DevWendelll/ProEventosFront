import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.routes';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
