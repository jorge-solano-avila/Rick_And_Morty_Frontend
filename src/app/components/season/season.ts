import { Component, Input, SimpleChange, OnInit, OnChanges } from "@angular/core";

import { Episode, EpisodeData } from "../../models/episode/episode";
import { Season } from "../../models/season/season";
import { EpisodesResponse, EpisodeService } from "../../services/episode/episode";

@Component({
  selector: "app-season",
  templateUrl: "./season.html",
  styleUrls: ["./season.scss"]
})
export class SeasonComponent implements OnInit, OnChanges {
  @Input()
  season: Season;
  isLoading: boolean;
  episodes: Array<Episode>;

  constructor(private episodeService: EpisodeService) {
    this.isLoading = true;
    this.episodes = [];
  }

  getEpisodes(): void {
    this.episodeService.getAllBySeason(this.season.code)
      .subscribe((response: EpisodesResponse) => {
        this.episodes = response.results.map((episodeData: EpisodeData) => new Episode(episodeData));
        this.isLoading = false;
      });
  }

  ngOnInit() {}

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    if (changes.season.previousValue !== changes.season.currentValue) {
      this.isLoading = true;
      this.getEpisodes();
    }
  }
}
