import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { UserService } from "../../../core/services";
import { AsyncPipe, NgClass, NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MsalService } from "@azure/msal-angular";
import { AccountService } from "../../../microsoft/auth-library/services/msal.service.factory";
import { LanguageSelectorComponent } from "../language-selector/language-selector.component";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    AsyncPipe,
    NgClass,
    NgOptimizedImage,
    RouterLink,
    LanguageSelectorComponent,
  ],
})
export class NavComponent {
  constructor(
    protected msalService: MsalService,
    protected userService: UserService,
    protected accountService: AccountService,
  ) {}
}
