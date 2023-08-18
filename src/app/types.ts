export type RootStore = {
  root: {
    pageTitle: PageTitle;
  };
};

export type PageTitle = {
  value: string;
};

export type Movie = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};
