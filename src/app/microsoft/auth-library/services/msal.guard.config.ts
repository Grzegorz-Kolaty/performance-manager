import {
  MsalGuardConfiguration,
  MsalInterceptorConfiguration,
} from "@azure/msal-angular";
import { environment } from "../../../../environments/environment";
import { InteractionType } from "@azure/msal-browser";

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set(
    environment.MSAL.REDIRECT_URI,
    environment.MSAL.SCOPES_ARRAY,
  );

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: environment.MSAL.SCOPES_ARRAY,
    },
    loginFailedRoute: "/",
  };
}
