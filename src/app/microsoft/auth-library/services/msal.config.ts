import { environment } from "../../../../environments/environment";

export const msalConfig = {
  auth: {
    clientId: environment.MSAL.CLIENT_ID,
    authority: environment.MSAL.AUTHORITY,
    redirectUri: environment.MSAL.REDIRECT_URI,
    postLogoutRedirectUri: environment.MSAL.POST_LOGOUT_URI,
    scopes: environment.MSAL.SCOPES_ARRAY,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};
