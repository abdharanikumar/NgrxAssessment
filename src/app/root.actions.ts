import { createAction, props } from "@ngrx/store";
import { PageTitle,Movie, RootStore } from "./types";

export const setPageTitle = createAction(
  "[App] Set Page Title",
  props<PageTitle>()
);

export const LoadMovieList = createAction("[App] Load Movie Success", props<{ payload }>());


