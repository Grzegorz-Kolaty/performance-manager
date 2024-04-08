import { Component, Input } from "@angular/core";
import { Role } from "../../../core/enums";
import { NgxPermissionsModule } from "ngx-permissions";
import { QuestionsService, TemplatesService } from "../../../core/services";
import { AsyncPipe } from "@angular/common";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";

@Component({
  selector: "app-question",
  standalone: true,
  imports: [NgxPermissionsModule, AsyncPipe, LoadingSpinnerComponent],
  templateUrl: "./question.component.html",
})
export class QuestionComponent {
  @Input() mode: string;
  protected readonly Role = Role;

  constructor(
    protected readonly questionsService: QuestionsService,
    protected readonly templatesService: TemplatesService,
  ) {
    this.mode = "";
  }
}
