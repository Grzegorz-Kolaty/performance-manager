import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  ViewChild,
} from "@angular/core";
import { IDynamicPerson, MgtPeoplePicker } from "@microsoft/mgt";
import { Role } from "../../../core/enums";
import { NgxPermissionsModule } from "ngx-permissions";
import { Form } from "../../../core/interfaces";
import { FormsService } from "../../../core/services";

@Component({
  selector: "app-add-user-to-form",
  standalone: true,
  imports: [NgxPermissionsModule],
  templateUrl: "./add-user-to-form.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddUserToFormComponent {
  @ViewChild("mgtPicker") mgtPicker: MgtPeoplePicker = null!;
  @Input() selectedForm!: Form;
  usersToAdd: string = "";
  protected readonly Role = Role;

  constructor(protected readonly formsService: FormsService) {}

  handleSelectionChanged = (event: any) => {
    this.usersToAdd = event.detail.map(
      (person: IDynamicPerson) => person.id,
    ) as string;
  };
}
