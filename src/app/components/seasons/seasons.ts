import { Component, EventEmitter, Output, OnInit } from "@angular/core";

import { Season } from "../../models/season/season";

@Component({
  selector: "app-seasons",
  templateUrl: "./seasons.html",
  styleUrls: ["./seasons.scss"]
})
export class SeasonsComponent implements OnInit {
  seasons: Array<Season> = [];

  @Output()
  selected: EventEmitter<Season> = new EventEmitter<Season>();

  constructor() {
    this.seasons = [new Season({
      name: "Season 1",
      code: "S01"
    }),
    new Season({
      name: "Season 2",
      code: "S02"
    }),
    new Season({
      name: "Season 3",
      code: "S03"
    })];
  }

  select(season: Season) {
    this.selected.emit(season);
  }

  ngOnInit() {
    this.select(this.seasons[0]);
  }
}
