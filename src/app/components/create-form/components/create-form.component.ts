import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

import { IDynamicPerson, MgtPeoplePicker } from "@microsoft/mgt";
import { Form, Template } from "../../../core/interfaces";
import { FormsService, TemplatesService } from "../../../core/services";
import { AsyncPipe, DatePipe, KeyValuePipe } from "@angular/common";
import { Subscription } from "rxjs";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";
import { TemplateComponent } from "../../../shared/components/template/template.component";
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";

@Component({
  selector: "app-create-form",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BsDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    KeyValuePipe,
    DatePipe,
    RouterLink,
    LoadingSpinnerComponent,
    RouterLinkActive,
    TemplateComponent,
    SearchBarComponent,
  ],
  templateUrl: "./create-form.component.html",
})
export class CreateFormComponent implements OnInit, OnDestroy {
  @ViewChild("mgtPicker") mgtPicker: MgtPeoplePicker = null!;
  currentView: string = "";

  selectedTemplate!: Template;

  formCreator = this.fb.group({
    name: new FormControl(""),
    users: new FormControl<string[]>([]),
    startTimestamp: new FormControl<Date | undefined>(undefined),
    endTimestamp: new FormControl<Date | undefined>(undefined),
  });

  public today: Date = new Date();
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    protected templatesService: TemplatesService,
    protected formsService: FormsService,
  ) {
    this.today.setMinutes(this.today.getMinutes() + 30);
  }

  ngOnInit() {
    const templateInUrl = this.route.snapshot.paramMap.get("templateId") ?? "";
    if (templateInUrl) {
      this.fetchTemplate(templateInUrl);
      this.currentView = "createFormFromTemplate";
    } else {
      this.currentView = "browseTemplates";
      this.templatesService.loadTemplates();
    }
  }

  fetchTemplate(templateId: string) {
    this.templatesService.getTemplatesById(templateId).subscribe({
      next: (template: Template) => {
        this.selectedTemplate = template;
      },
    });
  }

  onDatePickerValueChange(value: (Date | undefined)[] | undefined): void {
    if (value) {
      const adjustedStartTimestamp = value[0];
      adjustedStartTimestamp!.setMinutes(
        adjustedStartTimestamp!.getMinutes() + 15,
      );

      const adjustedEndTimestamp = value[1];
      adjustedEndTimestamp!.setMinutes(adjustedEndTimestamp!.getMinutes() + 15);

      this.formCreator.controls.startTimestamp.patchValue(
        adjustedStartTimestamp,
      );
      this.formCreator.controls.endTimestamp.patchValue(adjustedEndTimestamp);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  handleSelectionChanged = (event: any) => {
    this.formCreator.controls.users.patchValue(
      event.detail.map((person: IDynamicPerson) => person.id) as string[],
    );
  };

  submitForm(): void {
    if (this.selectedTemplate.id) {
      this.formsService.createFormFromTemplate(
        this.selectedTemplate.id,
        this.formCreator.value as Form,
      );
    }
  }
}
