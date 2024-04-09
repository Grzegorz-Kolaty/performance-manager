import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from "@angular/common/http";
import {
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
  MsalBroadcastService,
  MsalGuard,
  MsalInterceptor,
  MsalService,
} from "@azure/msal-angular";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxPermissionsModule } from "ngx-permissions";
import {PreloadAllModules, provideRouter, withDebugTracing, withPreloading} from "@angular/router";
import { ROUTES } from "./app.routes";
import {
  provideAnimations,
  provideNoopAnimations,
} from "@angular/platform-browser/animations";
import { publicClientApp } from "./microsoft/auth-library/services/msal.service.factory";
import {
  MSALGuardConfigFactory,
  MSALInterceptorConfigFactory,
} from "./microsoft/auth-library/services/msal.guard.config";
import { APIInterceptor } from "./core/interceptors/backend.interceptor";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { provideToastr } from "ngx-toastr";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES, withPreloading(PreloadAllModules), withDebugTracing()),
    importProvidersFrom(
      BrowserModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
      NgxPermissionsModule.forRoot(),
    ),
    provideNoopAnimations(),
    provideHttpClient(withInterceptors([APIInterceptor])),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    {
      provide: MSAL_INSTANCE,
      useValue: publicClientApp,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },

    MsalService,
    MsalGuard,
    MsalBroadcastService,
    provideAnimations(),
    provideToastr(),
  ],
};
