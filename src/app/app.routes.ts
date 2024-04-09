import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MsalGuard } from "@azure/msal-angular";
import { Role } from "./core/enums";
import { ngxPermissionsGuard } from "ngx-permissions";
import { NoPermissionsComponent } from "./components/no-permissions/no-permissions.component";
import {DashboardComponent} from "./components/dashboard/components/dashboard.component";

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "/home",
    component: HomeComponent,
  },
  {
    path: "/no-permissions",
    component: NoPermissionsComponent,
  },
  {
    path: "/dashboard",
    component: DashboardComponent,
  },
  // {
  //   path: "dashboard",
  //   loadChildren: () =>
  //     import("./components/dashboard/routes").then((m) => m.DASHBOARD_ROUTES),
  //   canActivate: [MsalGuard],
  // },
  {
    path: "/browse-forms",
    loadChildren: () =>
      import("./components/browse-surveys/routes").then(
        (m) => m.BROWSE_SURVEYS_ROUTES,
      ),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.user, Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "/create-template",
    loadChildren: () =>
      import("./components/create-template/routes").then(
        (m) => m.CREATE_SURVEY_ROUTES,
      ),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "/create-form/template/:templateId",
    loadChildren: () =>
      import("./components/create-form/routes").then(
        (m) => m.CREATE_FORM_ROUTES,
      ),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "/create-form",
    loadChildren: () =>
      import("./components/create-form/routes").then(
        (m) => m.CREATE_FORM_ROUTES,
      ),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "/fill-form/template/:templateId",
    loadChildren: () =>
      import("./components/fill-form/routes").then((m) => m.FILL_SURVEY_ROUTES),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.user, Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "/fill-form/form/:formId/user/:userId",
    loadChildren: () =>
      import("./components/fill-form/routes").then((m) => m.FILL_SURVEY_ROUTES),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.user, Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "/settings",
    loadChildren: () =>
      import("./components/settings/routes").then((m) => m.SETTINGS_ROUTES),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
];
