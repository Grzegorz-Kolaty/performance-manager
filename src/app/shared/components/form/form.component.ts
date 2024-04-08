import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Role } from "../../../core/enums";
import { AsyncPipe, DatePipe } from "@angular/common";
import { NgxPermissionsModule } from "ngx-permissions";
import { Form, Status } from "../../../core/interfaces";
import { RouterLink } from "@angular/router";
import { AddUserToFormComponent } from "../../modals/add-user-to-form/add-user-to-form.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormsService } from "../../../core/services";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [
    DatePipe,
    NgxPermissionsModule,
    RouterLink,
    AddUserToFormComponent,
    AsyncPipe,
    LoadingSpinnerComponent,
  ],
  templateUrl: "./form.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormComponent {
  protected readonly Role = Role;
  protected readonly Status = Status;

  constructor(
    protected formsService: FormsService,
    private modalService: NgbModal,
  ) {}

  openAddUserToSurveyModal(form: Form) {
    const modalRef = this.modalService.open(AddUserToFormComponent, {
      size: "lg",
      centered: true,
    });
    modalRef.componentInstance.selectedForm = form;
  }
}
