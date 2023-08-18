import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting
// } from "@angular/platform-browser-dynamic/testing";

import { MovieDetailsComponent } from "./movie-details.component";

describe("MovieDetailsComponent", () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MovieDetailsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    console.log(fixture);
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeDefined();
  // });

  // beforeEach(() => {
  //   TestBed.resetTestEnvironment();
  //   TestBed.initTestEnvironment(
  //     BrowserDynamicTestingModule,
  //     platformBrowserDynamicTesting()
  //   );
  // });

  it("should create", () => {
    // TestBed.configureTestingModule({ declarations: [MovieDetailsComponent] });
    // console.log(TestBed);
    // const fixture = TestBed.createComponent(MovieDetailsComponent);
    // const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
