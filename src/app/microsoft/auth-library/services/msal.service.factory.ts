import {
  IPublicClientApplication,
  PublicClientApplication,
  RedirectRequest,
} from "@azure/msal-browser";
import { msalConfig } from "./msal.config";
import { Inject, Injectable } from "@angular/core";
import {
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
  MsalService,
} from "@azure/msal-angular";

export const publicClientApp: IPublicClientApplication =
  new PublicClientApplication(msalConfig);

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
  ) {}

  checkAndSetActiveAccount() {
    const activeAccount = this.authService.instance.getActiveAccount();
    if (
      !activeAccount &&
      this.authService.instance.getAllAccounts().length > 0
    ) {
      const accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  loginRedirect(): void {
    const redirectStartPage = "dashboard";
    this.authService.instance.loginRedirect({
      redirectStartPage,
      ...this.msalGuardConfig.authRequest,
    } as RedirectRequest);
  }

  //just in case if something in Microsoft Graph Toolkit will change
  logout(): void {
    this.authService.instance.logoutRedirect();
  }
}
