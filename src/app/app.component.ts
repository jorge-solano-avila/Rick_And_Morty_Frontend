import { Component } from "@angular/core";

import { Season } from "./models/season/season";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  selectedSeason: Season;

  constructor() {
    
  }

  onSelected(season: Season) {
    this.selectedSeason = season;
  }
}
