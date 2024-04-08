import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import {
  FormsService,
  QuestionsService,
  TemplatesService,
  UserService,
} from "../../../core/services";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Form, Question, Template } from "../../../core/interfaces";
import { NgxPermissionsModule } from "ngx-permissions";
import { AsyncPipe, DatePipe, NgClass } from "@angular/common";
import { concatMap, from, toArray } from "rxjs";
import { Role } from "../../../core/enums";
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: "app-fill-form",
  templateUrl: "./fill-form.component.html",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgxPermissionsModule,
    AsyncPipe,
    DatePipe,
    LoadingSpinnerComponent,
    RouterLink,
  ],
})
export class FillFormComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({});
  form!: Form;
  isUser: boolean;
  protected readonly Role = Role;
  protected formId: string = "";
  protected templateId: string = "";

  constructor(
    private route: ActivatedRoute,
    protected userService: UserService,
    protected formsService: FormsService,
    private templateService: TemplatesService,
    private questionService: QuestionsService,
    private fb: FormBuilder,
  ) {
    this.isUser = this.userService.currentRole === Role.user;
  }

  ngOnInit() {
    this.formId = this.route.snapshot.paramMap.get("formId") || "";
    this.templateId = this.route.snapshot.paramMap.get("templateId") || "";

    if (this.formId) {
      this.fetchSurvey();
    } else if (this.templateId) {
      this.fetchTemplate();
    }
  }

  fetchSurvey() {
    this.formsService.getFormById(this.formId).subscribe({
      next: (survey: Form) => {
        this.form = survey;
        this.initForm();
      },
    });
  }

  fetchTemplateQuestions(template: Template) {
    const questionIds = template.questions;
    from(questionIds)
      .pipe(
        concatMap((questionId) =>
          this.questionService.getQuestionById(questionId as string),
        ),
        toArray(),
      )
      .subscribe({
        next: (questions: Question[]) => {
          const transformedTemplate: Template = {
            ...template,
            questions: questions,
          };
          this.form = transformedTemplate as Form;
          this.initForm();
        },
      });
  }

  fetchTemplate() {
    this.templateService.getTemplatesById(this.templateId).subscribe({
      next: (template: Template) => {
        this.fetchTemplateQuestions(template);
      },
    });
  }

  initForm() {
    const formControls: { [key: string]: FormGroup } = {};
    this.form.questions?.forEach((question: Question, index: number) => {
      if (question.id !== undefined) {
        formControls[index] = this.fb.group({
          userText: new FormControl(
            {
              value: question.userText,
              disabled:
                !!question.userText || !this.isUser || !!this.templateId,
            },
            Validators.required,
          ),
          selectedUserOption: new FormControl(
            {
              value: question.selectedUserOption?.id,
              disabled:
                !!question.selectedUserOption ||
                !this.isUser ||
                !!this.templateId,
            },
            Validators.required,
          ),
          supervisorText: new FormControl(
            {
              value: question.supervisorText,
              disabled:
                !!question.supervisorText || this.isUser || !!this.templateId,
            },
            Validators.required,
          ),
          selectedSupervisorOption: new FormControl(
            {
              value: question.selectedSupervisorOption?.id,
              disabled:
                !!question.selectedSupervisorOption ||
                this.isUser ||
                !!this.templateId,
            },
            Validators.required,
          ),
        });
      }
    });

    this.formGroup = this.fb.group(formControls);
  }

  saveAnswer(question: Question, questionIndex: number): void {
    const selectedOption = this.formGroup.get(`${questionIndex}`)?.value;

    // console.log(selectedOption);
    console.log(
      "formid: ",
      this.formId,
      "questionId: ",
      question.id,
      "questionUserText: ",
      selectedOption.userText,
      "selectedOptionid: ",
      selectedOption.selectedUserOption,
    );
    if (
      question &&
      question.id &&
      selectedOption.userText &&
      selectedOption.selectedUserOption
    ) {
      this.questionService.saveQuestionAnswer(
        this.formId,
        question.id,
        selectedOption,
        selectedOption.id,
      );
    }
  }
}
