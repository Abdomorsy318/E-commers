import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceprors/header.interceptor';
import { errorsInterceptor } from './core/interceprors/errors.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withViewTransitions()),
    provideClientHydration() ,
    provideHttpClient(withFetch() , withInterceptors([headerInterceptor , errorsInterceptor])) ,
    provideAnimations(),
    provideToastr()
  ]
};
