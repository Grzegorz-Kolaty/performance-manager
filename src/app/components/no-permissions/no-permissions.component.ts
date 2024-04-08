import { Component } from "@angular/core";

@Component({
  selector: "app-no-permissions",
  standalone: true,
  template: `
    <div class="container mt-5">
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Permission Denied!</h4>
        <p>You do not have the required permissions to view this content.</p>
      </div>
    </div>
  `,
})
export class NoPermissionsComponent {}
