import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MsalBroadcastService, MsalService } from "@azure/msal-angular";
import { InteractionStatus } from "@azure/msal-browser";
import { filter, Subject, take, takeUntil } from "rxjs";
import { NavComponent } from "./shared/components/nav/nav.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ToolkitService } from "./microsoft/graph/services/toolkit.service";
import { AccountService } from "./microsoft/auth-library/services/msal.service.factory";
import { UserService } from "./core/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavComponent,
    SidebarComponent,
    FooterComponent,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    protected authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private mgtService: ToolkitService,
    private accountService: AccountService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.authService.handleRedirectObservable().subscribe();

    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None,
        ),
        takeUntil(this._destroying$),
      )
      .subscribe(() => {
        this.isAuthenticated =
          this.authService.instance.getAllAccounts().length > 0;
        if (this.isAuthenticated) {
          this.accountService.checkAndSetActiveAccount();
          this.userService.getBackendUserProfile().pipe(take(1)).subscribe();
          this.mgtService.initializeMgt();
        }
      });
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
