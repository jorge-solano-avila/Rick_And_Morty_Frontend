import { Component, OnInit } from "@angular/core";

import { Season } from "../../models/season/season";

@Component({
  selector: "app-seasons",
  templateUrl: "./seasons.component.html",
  styleUrls: ["./seasons.component.scss"]
})
export class SeasonsComponent implements OnInit {
  seasons: Array<Season> = [];

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

  ngOnInit() {}
}
