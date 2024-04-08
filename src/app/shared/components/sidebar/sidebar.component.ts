import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { BreakpointObserver, LayoutModule } from "@angular/cdk/layout";


@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterLinkActive, RouterLink, LayoutModule],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  isVisible: boolean = true;

  constructor(private observer: BreakpointObserver) {
    this.observer.observe("(max-width: 1400px)").subscribe((result) => {
      this.isVisible = !result.matches;
    });
  }
}
