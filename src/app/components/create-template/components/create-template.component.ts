import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { QuestionsService, TemplatesService } from "../../../core/services";
import { Template } from "../../../core/interfaces";
import { Role } from "../../../core/enums";
import { NgxPermissionsModule } from "ngx-permissions";
import { NgSelectModule } from "@ng-select/ng-select";
import { AsyncPipe, NgClass } from "@angular/common";
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";
import { QuestionComponent } from "../../../shared/components/question/question.component";
import { FormComponent } from "../../../shared/components/form/form.component";
import { CategoriesService } from "../../../core/services/categories/categories.service";
import { CreateCategoryComponent } from "../../../shared/components/create-category/create-category.component";
import { CreateQuestionComponent } from "../../../shared/components/create-question/create-question.component";
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";

@Component({
  selector: "app-create-template",
  templateUrl: "./create-template.component.html",
  standalone: true,
  imports: [
    NgxPermissionsModule,
    NgSelectModule,
    AsyncPipe,
    ReactiveFormsModule,
    NgClass,
    LoadingSpinnerComponent,
    FormsModule,
    QuestionComponent,
    FormComponent,
    CreateCategoryComponent,
    CreateQuestionComponent,
    SearchBarComponent,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTemplateComponent implements OnInit {
  currentView: string;

  templateCreator: FormGroup;

  protected readonly Role = Role;

  constructor(
    private fb: FormBuilder,
    protected questionsService: QuestionsService,
    protected readonly categoriesService: CategoriesService,
    protected readonly templatesService: TemplatesService,
  ) {
    this.currentView = "create";

    this.templateCreator = this.fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(126),
        ],
      ],
      questions: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    this.categoriesService.loadCategories();
    this.questionsService.loadQuestions();
  }

  setCurrentView(view: string) {
    this.currentView = view;
  }

  saveTemplate() {
    const templateToSend: Template = this.templateCreator.value;
    templateToSend.questions =
      this.templatesService.submittedQuestionsIds$.value;

    if (
      templateToSend.name &&
      this.templatesService.submittedQuestionsIds$.value.length
    ) {
      // this.isProcessingSomething = true;
      this.templatesService.createTemplate(templateToSend).subscribe({
        next: () => {
          this.templateCreator.reset();
          this.templatesService.submittedQuestionsIds$.next([]);
        },
        error: (error) => {
          console.error("Error creating template:", error);
        },
        complete: () => {
          // this.isProcessingSomething = false;
        },
      });
    }
  }
}
