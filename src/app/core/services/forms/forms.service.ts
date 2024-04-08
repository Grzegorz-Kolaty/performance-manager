import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  BehaviorSubject,
  catchError,
  concat,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
  tap,
} from "rxjs";
import { Form, Status } from "../../interfaces";

@Injectable({
  providedIn: "root",
})
export class FormsService {
  forms$: Observable<Form[]>;
  formsStatus: BehaviorSubject<Status> = new BehaviorSubject<Status>(
    Status.All,
  );
  searchFormValue: BehaviorSubject<string> = new BehaviorSubject<string>("");
  isProcessingSomething: boolean = false;

  constructor(private http: HttpClient) {
    this.forms$ = of([]);
  }

  getForms(searchFormValue?: string): Observable<Form[]> {
    if (searchFormValue) {
      return this.http.get<Form[]>(`forms`, {
        params: {
          page: 0,
          name: searchFormValue,
        },
      });
    } else {
      return this.http.get<Form[]>(`forms`, {
        params: { page: 0 },
      });
    }
  }

  getFormById(id: string): Observable<Form> {
    const url = `forms/${id}`;
    return this.http.get<Form>(url);
  }

  removeUserFromForm(id: string, userId: string): void {
    this.isProcessingSomething = true;
    const url = `forms/${id}/users/${userId}`;
    this.http.delete<[]>(url).subscribe({
      complete: () => {
        this.loadForms();
      },
    });
  }

  createFormFromTemplate(templateId: string, form: Form) {
    this.isProcessingSomething = true;
    this.http
      .post<Form>(`forms`, form, {
        params: { templateId: templateId },
      })
      .subscribe({
        error: () => {
          this.isProcessingSomething = false;
        },
        complete: () => {
          this.isProcessingSomething = false;
        },
      });
  }

  addUserToForm(formId: string, userId: string): void {
    this.http.post<[]>(`forms/${formId}/users/${userId}`, {}).subscribe({
      complete: () => {
        this.loadForms();
      },
    });
  }

  removeForm(surveyId: string): void {
    this.isProcessingSomething = true;
    this.http.delete<Form>(`forms/${surveyId}`).subscribe({
      complete: () => {
        this.loadForms();
      },
    });
  }

  public changeFormsStatus(status: Status): void {
    this.formsStatus.next(status);
  }

  public loadForms() {
    this.forms$ = concat(
      of([] as Form[]),
      this.searchFormValue.pipe(
        distinctUntilChanged(),
        tap(() => (this.isProcessingSomething = true)),
        switchMap((searchValue) =>
          this.getForms(searchValue).pipe(
            catchError(() => of([])),
            tap(() => (this.isProcessingSomething = false)),
          ),
        ),
      ),
    ) as Observable<Form[]>;
  }
}
