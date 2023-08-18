import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PageTitle, RootStore } from "./types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageTitle$: Observable<{ pageTitle: PageTitle }>;
  pageTitle: string;

  constructor(private store: Store<RootStore>) {
    this.pageTitle$ = store.select("root");
    this.pageTitle$.forEach(({ pageTitle }) => {
      this.pageTitle = pageTitle.value;
    });
  }
}
