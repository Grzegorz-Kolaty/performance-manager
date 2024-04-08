import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../../../core/services";
import { UserProfile } from "../../../core/interfaces";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Role } from "../../../core/enums";
import { JsonPipe } from "@angular/common";
import { IDynamicPerson, MgtPeoplePicker } from "@microsoft/mgt";

@Component({
  selector: "app-settings",
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit, OnDestroy {
  @ViewChild("mgtPicker") mgtPicker: MgtPeoplePicker = null!;
  currentView: string = "profile";

  roleForm: FormGroup;
  subscriptions: Subscription[] = [];
  protected readonly Role = Role;

  constructor(
    protected userService: UserService,
    private fb: FormBuilder,
  ) {
    this.roleForm = this.fb.group({
      ROLE_ADMIN: undefined,
      ROLE_SUPERVISOR: undefined,
      ROLE_USER: undefined,
      userId: false,
    });
  }

  ngOnInit() {
    [Role.admin, Role.supervisor, Role.user].forEach((controlName: Role) => {
      const subscription = this.roleForm
        .get(controlName)
        ?.valueChanges.subscribe((isChecked) => {
          this.handleCheckboxChange(controlName, isChecked);
        });
      if (subscription) {
        this.subscriptions.push(subscription);
      }
    });
  }

  setCurrentView(view: string): void {
    this.currentView = view;
  }

  handleCheckboxChange(controlName: Role, isChecked: boolean) {
    if (isChecked)
      this.userService
        .addRoleByUserId(this.roleForm.value.userId, controlName)
        .subscribe();
    else {
      this.userService
        .removeRoleByUserId(this.roleForm.value.userId, controlName)
        .subscribe();
    }
  }

  getRolesForSelectedUser(userId: string[]): void {
    if (userId.length) {
      this.userService
        .getUserRolesById(userId[0])
        .subscribe((userProfile: UserProfile): void => {
          this.roleForm.patchValue(
            {
              ROLE_ADMIN: userProfile.roles.includes(Role.admin),
              ROLE_SUPERVISOR: userProfile.roles.includes(Role.supervisor),
              ROLE_USER: userProfile.roles.includes(Role.user),
              userId: userProfile.id,
            },
            { emitEvent: false },
          );
        });
    } else {
      this.roleForm.patchValue({ usedId: false });
    }
  }

  handleSelectionChanged = (event: any) => {
    this.getRolesForSelectedUser(
      event.detail.map((person: IDynamicPerson) => person.id) as string[],
    );
  };

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe(),
    );
  }
}
