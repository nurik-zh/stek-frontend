// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // ✅ импортируй конфиг

bootstrapApplication(AppComponent, appConfig); // ✅ применяй конфиг
