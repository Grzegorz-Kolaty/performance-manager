import { Role } from "../../enums";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxPermissionsService } from "ngx-permissions";
import { catchError, Observable, tap, throwError } from "rxjs";
import { UserProfile } from "../../interfaces";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  availableRoles: Role[] | undefined;
  currentRole: Role | undefined;
  userProfile: UserProfile | undefined;

  constructor(
    private http: HttpClient,
    private permissionsService: NgxPermissionsService,
    private router: Router,
  ) {}

  public getBackendUserProfile(): Observable<UserProfile> {
    console.log(this.userProfile);
    return this.http.get<UserProfile>(`users/@me`).pipe(
      tap((userProfile: UserProfile) => {
        if (userProfile) {
          this.userProfile = userProfile;
          this.updateAvailableRoles(userProfile.roles);
          this.setDefaultRole();
        }
      }),
      catchError((error) => {
        console.error(error);
        return throwError(() => new Error(error));
      }),
    );
  }

  updateAvailableRoles(roles: Role[]) {
    this.availableRoles = roles;
  }

  updateCurrentRole(role: Role) {
    this.currentRole = role;
    this.permissionsService.flushPermissions();
    this.permissionsService.loadPermissions([role]);
    this.router.navigateByUrl("/dashboard");
  }

  setDefaultRole() {
    if (!this.currentRole && this.availableRoles) {
      this.updateCurrentRole(this.availableRoles[0]);
    }
  }

  getUserRolesById(userId: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`users/${userId}`);
  }

  addRoleByUserId(userId: string, payload: Role): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`users/${userId}/roles`, {
      role: payload,
    });
  }

  removeRoleByUserId(userId: string, payload: Role): Observable<UserProfile> {
    const options = {
      body: {
        role: payload,
      },
    };
    return this.http.delete<UserProfile>(`users/${userId}/roles`, options);
  }
}
