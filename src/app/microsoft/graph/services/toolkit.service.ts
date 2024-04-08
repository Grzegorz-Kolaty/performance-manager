import { Injectable } from "@angular/core";
import {
  Msal2Provider,
  Providers,
  registerMgtComponents,
} from "@microsoft/mgt";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalService } from "@azure/msal-angular";

@Injectable({
  providedIn: "root",
})
export class ToolkitService {
  constructor(private authService: MsalService) {}

  initializeMgt() {
    Providers.globalProvider = new Msal2Provider({
      publicClientApplication: this.authService
        .instance as PublicClientApplication,
    });
    registerMgtComponents();
  }
}
