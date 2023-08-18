import { Action, createReducer, on } from "@ngrx/store";
import { setPageTitle,LoadMovieList } from "./root.actions";
import { PageTitle } from "./types";

export interface State {
  // Somehow there's an issue
  // when we declare pageTitle as primitive string
  // or as String object
  // Therefore, the value is wrapped under an object
  // as temporary solution
  pageTitle: PageTitle;
  list: []
}

export const initialState: State = {
  pageTitle: { value: "" },
  list: []
};

const _rootReducer = createReducer(
  initialState,

  on(LoadMovieList, (state, { payload }) => {
    return Object.assign({
      ...state, 
      list: [...state.list, payload],
    });
  }),

  on(setPageTitle, (state: State, pageTitle: PageTitle) => {
    return {
      ...state,
      pageTitle
    };
  })
);

export const rootReducer = (state: State, action: Action) =>
  _rootReducer(state, action);
