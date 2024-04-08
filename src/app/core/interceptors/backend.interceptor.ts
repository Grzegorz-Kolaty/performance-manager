import { environment } from "../../../environments/environment";
import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { MsalService } from "@azure/msal-angular";
import { catchError, from, switchMap, throwError } from "rxjs";
import { ToastrService } from "ngx-toastr";

export const APIInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const msalService = inject(MsalService);
  const toastr = inject(ToastrService);

  // Don't intercept excluded URLs
  const shouldExclude = environment.EXCLUDED_URLS.some((url) =>
    req.url.startsWith(url),
  );
  if (shouldExclude) {
    return next(req);
  }

  // Intercept and add token
  return from(
    msalService.instance.acquireTokenSilent({
      scopes: environment.MSAL.SCOPES_ARRAY,
    }),
  ).pipe(
    switchMap((tokenResponse) => {
      const authToken = tokenResponse.accessToken ?? "";
      const apiReq = req.clone({
        url: `${environment.BACKEND_API}${req.url}`,
        setHeaders: {
          Authorization: `${authToken}`,
        },
      });
      return next(apiReq).pipe(
        // retry(2),
        catchError((err: HttpErrorResponse) => {
          // if (err.status === 0) {
          //   console.log(err.error);
          toastr.error("Wystąpił nieznany błąd, spróbuj później");
          // }
          return throwError(
            () => new Error("An error occurred. Please try again later."),
          );
        }),
      );
    }),
  );
};
