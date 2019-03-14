import { Component, OnInit } from "@angular/core";

import { Season } from "../../models/season/season";
import { AppGlobal } from "../../app.global";

@Component({
  selector: "app-seasons",
  templateUrl: "./seasons.html",
  styleUrls: ["./seasons.scss"]
})
export class SeasonsComponent implements OnInit {
  seasons: Array<Season> = [];

  constructor() {
    this.seasons = AppGlobal.SEASONS;
  }

  ngOnInit() {}
}
