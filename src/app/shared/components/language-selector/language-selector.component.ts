import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UpperCasePipe } from "@angular/common";

@Component({
  selector: "app-language-selector",
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, UpperCasePipe],
  template: `
    <div class="btn-group mx-4">
      @for (lang of translate.getLangs(); track lang) {
        <button
          class="btn"
          [class.active]="translate.currentLang === lang"
          (click)="translate.use(lang)"
        >
          {{ lang | uppercase }}
        </button>
      }
    </div>
  `,
})
export class LanguageSelectorComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(["pl", "en"]);
    translate.setDefaultLang("pl");
    translate.currentLang = translate.getDefaultLang();
  }
}
