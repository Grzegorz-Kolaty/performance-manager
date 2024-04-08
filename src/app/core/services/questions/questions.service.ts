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
import { Question } from "../../interfaces";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NgxPermissionsService } from "ngx-permissions";
import { Role } from "../../enums";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class QuestionsService {
  questions$: Observable<Question[]>;

  searchQuestionValue: BehaviorSubject<string> = new BehaviorSubject<string>(
    "",
  );

  isProcessingSomething: boolean = false;

  constructor(
    private http: HttpClient,
    private permissionsService: NgxPermissionsService,
    private userService: UserService,
  ) {
    this.questions$ = of([]);
  }

  getQuestions(searchValue?: string): Observable<Question[]> {
    const url = `questions`;
    if (searchValue) {
      return this.http.get<Question[]>(url, {
        params: {
          name: searchValue,
          page: 0,
        },
      });
    } else {
      return this.http.get<Question[]>(url, {
        params: { page: 0 },
      });
    }
  }

  getQuestionById(questionId: string): Observable<Question> {
    return this.http.get<Question>(`questions/${questionId}`);
  }

  createQuestion(question: Question): Observable<Question> {
    const url = `questions`;
    // const role = Object.keys(this.permissionsService.getPermissions() || {});
    // const params = new HttpParams().set("role", role[0]);
    return this.http.post<Question>(url, question);
  }

  editQuestion(question: Question): Observable<Question> {
    const url = `/questions`;
    const role = Object.keys(this.permissionsService.getPermissions() || {});

    const params = new HttpParams().set("role", role[0]);

    return this.http.patch<Question>(url, question, { params });
  }

  saveQuestionAnswer(
    surveyId: string,
    questionId: string,
    textAnswer: string,
    selectedOptionId: string,
  ): void {
    const supervisorUrlPart =
      this.userService.currentRole === Role.supervisor && Role.admin
        ? "/supervisor"
        : "";
    const url = `answers/${surveyId}/${questionId}/${selectedOptionId}${supervisorUrlPart}`;
    this.http.post<Question>(url, { answer: textAnswer }).subscribe({
      complete: () => {
        this.isProcessingSomething = false;
      },
    });
  }

  public loadQuestions() {
    this.questions$ = concat(
      of([] as Question[]),
      this.searchQuestionValue.pipe(
        distinctUntilChanged(),
        tap(() => (this.isProcessingSomething = true)),
        switchMap((searchValue) =>
          this.getQuestions(searchValue).pipe(
            catchError(() => of([])),
            tap(() => (this.isProcessingSomething = false)),
          ),
        ),
      ),
    ) as Observable<Question[]>;
  }
}
