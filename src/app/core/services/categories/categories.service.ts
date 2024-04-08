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
import { Category } from "../../interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  categories$: Observable<Category[]>;
  searchCategoriesValue: BehaviorSubject<string> = new BehaviorSubject<string>(
    "",
  );

  isProcessingSomething: boolean = false;

  constructor(private readonly http: HttpClient) {
    this.categories$ = of([]);
  }

  createNewCategory(text: string): void {
    this.isProcessingSomething = true;
    this.http.post<Category>(`categories`, { text }).subscribe({
      complete: () => {
        this.isProcessingSomething = false;
      },
    });
  }

  // getCategories(searchCategoriesValue?: string): Observable<Category[]> {
  //   console.log(searchCategoriesValue);
  //   if (searchCategoriesValue) {
  //     return this.http.get<Category[]>(`categories`, {
  //       params: { name: searchCategoriesValue },
  //     });
  //   } else {
  //     return this.http.get<Category[]>(`categories`);
  //   }
  // }

  getCategories(searchCategoriesValue?: string): Observable<Category[]> {
    console.log(searchCategoriesValue);
    if (searchCategoriesValue) {
      const mockedCategoriesByName: Category[] = [
        {
          id: "wyszukajno123",
          text: "Wyszukajnoc",
        },
        {
          id: "fisiu",
          text: "No kurde",
        },
      ];
      return of(mockedCategoriesByName);
    } else {
      const mockedCategories: Category[] = [
        {
          id: "asd1ad5b-2dbe-4b46-a31e-a90a03fa4274",
          text: "Wydajność",
        },
        {
          id: "f889ad5b-2dbe-4b46-a31e-a90a03fa4274",
          text: "Szybkość w rozwiązywaniu tasków",
        },
        {
          id: "asdas9ad5b-2dbe-4b46-a31e-a90a03fa412s",
          text: "Kreatywność",
        },
        {
          id: "asdasad5b-2dbe-4b46-a31e-a90a12asd",
          text: "Inwencja własna",
        },
      ];
      return of(mockedCategories);
    }
  }

  public loadCategories() {
    this.categories$ = concat(
      of([] as Category[]),
      this.searchCategoriesValue.pipe(
        distinctUntilChanged(),
        tap(() => (this.isProcessingSomething = true)),
        switchMap((searchValue) =>
          this.getCategories(searchValue).pipe(
            catchError(() => of([])),
            tap(() => (this.isProcessingSomething = false)),
          ),
        ),
      ),
    ) as Observable<Category[]>;
  }
}
