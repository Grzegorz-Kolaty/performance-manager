import { Component, OnInit } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { MsalService } from "@azure/msal-angular";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  standalone: true,
  imports: [NgOptimizedImage, TranslateModule],
})
export class HomeComponent implements OnInit {
  imageTemplate = "/assets/images/template.png";
  imageLogo = "/assets/images/logo_Certum.png";

  constructor(
    private authService: MsalService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (!this.authService.instance.getActiveAccount()) {
      sessionStorage.clear();
      localStorage.clear();
    } else {
      this.router.navigate(["dashboard"]);
    }
  }
}
