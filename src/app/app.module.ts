import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { MoviePage } from "./pages/movie-page/movie-page.component";
import { MovieCatalogueComponent } from "./components/organisms/movie-catalogue/movie-catalogue.component";
import { MovieListComponent } from "./components/molecules/movie-list/movie-list.component";
import { MovieDetailsComponent } from "./components/molecules/movie-details/movie-details.component";
import { HeaderComponent } from "./components/atoms/header/header.component";
import { ListItemComponent } from "./components/atoms/list-item/list-item.component";
import { PosterComponent } from "./components/atoms/poster/poster.component";
import { MovieInfoComponent } from "./components/atoms/movie-info/movie-info.component";
import { MovieLabelComponent } from "./components/atoms/movie-label/movie-label.component";

import { rootReducer } from "./root.reducer";

@NgModule({
  declarations: [
    // Root Component
    AppComponent,
    // Page Component
    MoviePage,
    // Organisms Component
    MovieCatalogueComponent,
    // Molecules Component
    MovieListComponent,
    MovieDetailsComponent,
    // Atoms Component
    HeaderComponent,
    ListItemComponent,
    MovieInfoComponent,
    MovieLabelComponent,
    PosterComponent
  ],
  imports: [BrowserModule, StoreModule.forRoot({ root: rootReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
