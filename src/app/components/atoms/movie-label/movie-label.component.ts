import { Component, Input } from "@angular/core";

@Component({
  selector: "app-movie-label",
  templateUrl: "./movie-label.component.html",
  styleUrls: ["./movie-label.component.css"]
})
export class MovieLabelComponent {
  @Input() title!: string;
  @Input() year!: string;
}
