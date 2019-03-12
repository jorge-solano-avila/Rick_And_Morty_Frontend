import { Component, Input, SimpleChange, OnInit, OnChanges } from "@angular/core";

import { Season } from "../../models/season/season";

@Component({
  selector: "app-season",
  templateUrl: "./season.component.html",
  styleUrls: ["./season.component.scss"]
})
export class SeasonComponent implements OnInit, OnChanges {
  @Input()
  season: Season;
  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  getEpisodes(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 200000);
  }

  ngOnInit() {}

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    if (changes.season.previousValue !== changes.season.currentValue) {
      this.isLoading = true;
      this.getEpisodes();
    }
  }
}
