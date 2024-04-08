import { Component } from "@angular/core";

@Component({
  selector: "app-loading-spinner",
  standalone: true,
  imports: [],
  template: `
    <div class="text-center mt-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,
})
export class LoadingSpinnerComponent {}
