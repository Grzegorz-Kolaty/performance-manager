import { Component } from "@angular/core";
import { TemplatesService } from "../../../core/services";
import { AsyncPipe, DatePipe } from "@angular/common";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-template",
  standalone: true,
  imports: [AsyncPipe, LoadingSpinnerComponent, DatePipe, RouterLink],
  templateUrl: "./template.component.html",
})
export class TemplateComponent {
  constructor(protected readonly templatesService: TemplatesService) {}
}
