import { Injectable } from "@angular/core";
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
import { HttpClient } from "@angular/common/http";
import { Template } from "../../interfaces";

@Injectable({
  providedIn: "root",
})
export class TemplatesService {
  templates$: Observable<Template[]>;
  searchTemplateValue: BehaviorSubject<string> = new BehaviorSubject<string>(
    "",
  );

  submittedQuestionsIds$: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);
  isProcessingSomething: boolean = false;

  constructor(private http: HttpClient) {
    this.templates$ = of([]);
  }

  getTemplates(searchValue?: string): Observable<Template[]> {
    const url = `templates`;
    if (searchValue) {
      return this.http.get<Template[]>(url, {
        params: {
          name: searchValue,
          page: 0,
        },
      });
    } else {
      return this.http.get<Template[]>(url, {
        params: { page: 0 },
      });
    }
  }

  getTemplatesById(templateId: string): Observable<Template> {
    return this.http.get<Template>(`templates/${templateId}`);
  }

  createTemplate(template: Template): Observable<Template> {
    return this.http.post<Template>("templates", template);
  }

  addQuestionToSubmission(questionId: string): void {
    const currentValue = this.submittedQuestionsIds$.getValue();
    this.submittedQuestionsIds$.next([...currentValue, questionId]);
  }

  public removeQuestionFromSubmission(questionId: string): void {
    const currentValue = this.submittedQuestionsIds$.getValue();
    const index = currentValue.indexOf(questionId);
    if (index > -1) {
      currentValue.splice(index, 1);
      this.submittedQuestionsIds$.next(currentValue);
    }
  }

  public loadTemplates() {
    this.templates$ = concat(
      of([] as Template[]),
      this.searchTemplateValue.pipe(
        distinctUntilChanged(),
        tap(() => (this.isProcessingSomething = true)),
        switchMap((searchValue) =>
          this.getTemplates(searchValue).pipe(
            catchError(() => of([])),
            tap(() => (this.isProcessingSomething = false)),
          ),
        ),
      ),
    ) as Observable<Template[]>;
  }
}
