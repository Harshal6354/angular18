import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './Interceptor/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptorsFromDi()), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimations(), // Required for Toastr
    provideToastr(),
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }  ,
      
  ]
};
