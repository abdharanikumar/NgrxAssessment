import { Component, Input } from "@angular/core";

@Component({
  selector: "app-poster",
  templateUrl: "./poster.component.html",
  styleUrls: ["./poster.component.css"]
})
export class PosterComponent {
  @Input() imgSrc!: string;
  @Input() alt!: string;
}
