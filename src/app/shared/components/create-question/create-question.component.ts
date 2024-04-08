import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AsyncPipe, NgClass } from "@angular/common";
import { Question } from "../../../core/interfaces";
import { QuestionsService, TemplatesService } from "../../../core/services";
import { NgSelectModule } from "@ng-select/ng-select";
import { CategoriesService } from "../../../core/services/categories/categories.service";

@Component({
  selector: "app-create-question",
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgSelectModule, AsyncPipe],
  templateUrl: "./create-question.component.html",
})
export class CreateQuestionComponent {
  questionCreator: FormGroup;
  showCategorySelector: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    protected readonly questionsService: QuestionsService,
    private readonly templatesService: TemplatesService,
    protected readonly categoriesService: CategoriesService,
  ) {
    this.questionCreator = this.fb.group({
      questions: this.fb.array([]),
    });
  }

  get questionsInCreator() {
    return this.questionCreator.get("questions") as FormArray;
  }

  getSupervisorOptions(index: number): FormArray {
    return (this.questionsInCreator.at(index) as FormGroup).get(
      "supervisorOptions",
    ) as FormArray;
  }

  getUserOptions(index: number): FormArray {
    return (this.questionsInCreator.at(index) as FormGroup).get(
      "options",
    ) as FormArray;
  }

  createNewQuestion(): void {
    this.questionsInCreator.push(
      this.fb.group({
        name: [
          "",
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(126),
          ],
        ],
        options: this.fb.array([]),
        supervisorOptions: this.fb.array([]),
        userText: "",
        supervisorText: "",
        category: null,
      }),
    );
  }

  createOptionGroup(): FormGroup {
    return this.fb.group({
      points: [
        "",
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      content: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(126),
        ],
      ],
    });
  }

  createSupervisorAnswer(index: number) {
    const supervisorOptions = this.getSupervisorOptions(index);
    if (supervisorOptions) {
      supervisorOptions.push(this.createOptionGroup());
    }
  }

  createUserAnswer(index: number) {
    const options = this.getUserOptions(index);
    if (options) {
      options.push(this.createOptionGroup());
    }
  }

  addQuestionCategory(questionIndex: number): void {
    this.showCategorySelector = !this.showCategorySelector;
    if (!this.showCategorySelector) {
      this.questionsInCreator
        .at(questionIndex)
        .get("category")
        ?.patchValue(null);
    }
  }

  removeUserOption(index: number, answerIndex: number) {
    const options = this.getUserOptions(index);
    if (options) {
      options.removeAt(answerIndex);
    }
  }

  removeSupervisorOption(index: number, answerIndex: number) {
    const supervisorOptions = this.getSupervisorOptions(index);
    if (supervisorOptions) {
      supervisorOptions.removeAt(answerIndex);
    }
  }

  removeQuestion(index: number) {
    this.questionsInCreator.removeAt(index);
  }

  submitQuestion(question: Question) {
    // this.isProcessingSomething = true;
    this.questionsService.createQuestion(question).subscribe({
      next: (createdQuestion: Question) => {
        this.templatesService.addQuestionToSubmission(createdQuestion.id);
        this.questionsInCreator.clear();
      },
      error: (error) => {
        console.error("Error creating question:", error);
      },
      complete: () => {
        // this.isProcessingSomething = false;
      },
    });
  }
}
