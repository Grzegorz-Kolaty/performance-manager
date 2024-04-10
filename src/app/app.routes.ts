import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {MsalGuard} from "@azure/msal-angular";
import {ngxPermissionsGuard} from "ngx-permissions";
import {Role} from "./core/enums";
// import {MsalGuard} from "@azure/msal-angular";
// import {Role} from "./core/enums";
// import {ngxPermissionsGuard} from "ngx-permissions";
// import {DashboardComponent} from "./components/dashboard/components/dashboard.component";

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () => import("./components/home/home.component").then((m) => m.HomeComponent)
    // data: { preload: true },
  },
  {
    path: "no-permissions",
    loadComponent: () => import("./components/no-permissions/no-permissions.component").then((m) => m.NoPermissionsComponent),
    // data: { preload: true },
  },
  {
    path: "dashboard",
    loadChildren: () => import("./components/dashboard/routes").then((m) => m.DASHBOARD_ROUTES),
    canActivate: [MsalGuard]
  },
  // {
  //   path: "dashboard",
  //   loadChildren: () =>
  //     import("./components/dashboard/routes").then((m) => m.DASHBOARD_ROUTES),
  //   canActivate: [MsalGuard],
  // },
  {
    path: "browse-forms",
    loadComponent: () => import("./components/browse-surveys/components/browse-surveys.component").then((m) => m.BrowseSurveysComponent),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.user, Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "create-template",
    loadComponent: () => import("./components/create-template/components/create-template.component").then((m) => m.CreateTemplateComponent),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "create-form/template/:templateId",
    loadComponent: () => import("./components/create-form/components/create-form.component").then((m) => m.CreateFormComponent),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "create-form",
    loadComponent: () => import("./components/create-form/components/create-form.component").then((m) => m.CreateFormComponent),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "fill-form/template/:templateId",
    loadComponent: () => import("./components/fill-form/components/fill-form.component").then((m) => m.FillFormComponent),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.user, Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "fill-form/form/:formId/user/:userId",
    loadComponent: () => import("./components/fill-form/components/fill-form.component").then((m) => m.FillFormComponent),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.user, Role.supervisor, Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: "settings",
    loadComponent: () => import("./components/settings/components/settings.component").then((m) => m.SettingsComponent),
    canActivate: [MsalGuard, ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Role.admin],
        redirectTo: "/no-permissions",
      },
    },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
