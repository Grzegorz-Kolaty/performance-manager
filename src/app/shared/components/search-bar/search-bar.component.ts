import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  FormsService,
  QuestionsService,
  TemplatesService,
} from "../../../core/services";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./search-bar.component.html",
})
export class SearchBarComponent {
  @Input() mode: string = "";

  constructor(
    private readonly formsService: FormsService,
    private readonly templatesService: TemplatesService,
    private readonly questionsService: QuestionsService,
  ) {}

  onSearchSubmit(searchValue: string): void {
    if (this.mode === "form") {
      this.formsService.searchFormValue.next(searchValue);
    }
    if (this.mode === "template") {
      this.templatesService.searchTemplateValue.next(searchValue);
    }
    if (this.mode === "question") {
      this.questionsService.searchQuestionValue.next(searchValue);
    }
  }
}
