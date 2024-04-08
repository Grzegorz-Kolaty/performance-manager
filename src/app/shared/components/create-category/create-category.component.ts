import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CategoriesService } from "../../../core/services/categories/categories.service";

@Component({
  selector: "app-create-category",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./create-category.component.html",
})
export class CreateCategoryComponent {
  categoryCreator: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    protected readonly categoriesService: CategoriesService,
  ) {
    this.categoryCreator = this.fb.group({
      text: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(126),
        ],
      ],
    });
  }
}
