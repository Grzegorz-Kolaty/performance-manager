import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { Status } from "../../../core/interfaces";
import { FormsService } from "../../../core/services";
import { NgxPermissionsModule } from "ngx-permissions";
import { AsyncPipe, DatePipe, KeyValuePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";
import { FormsModule } from "@angular/forms";
import { FormComponent } from "../../../shared/components/form/form.component";
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";

@Component({
  selector: "app-browse-forms",
  standalone: true,
  imports: [
    NgxPermissionsModule,
    RouterLink,
    DatePipe,
    LoadingSpinnerComponent,
    AsyncPipe,
    FormsModule,
    KeyValuePipe,
    FormComponent,
    SearchBarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./browse-surveys.component.html",
})
export class BrowseSurveysComponent implements OnInit {
  protected readonly Status = Status;

  constructor(protected formsService: FormsService) {}

  ngOnInit() {
    this.formsService.loadForms();
  }
}
