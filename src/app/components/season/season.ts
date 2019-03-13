import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

import { Episode, EpisodeData } from "../../models/episode/episode";
import { Season } from "../../models/season/season";
import { EpisodesResponse, EpisodeService } from "../../services/episode/episode";
import { AppGlobal } from "../../app.global";

@Component({
  selector: "app-season",
  templateUrl: "./season.html",
  styleUrls: ["./season.scss"]
})
export class SeasonComponent implements OnInit {
  season: Season;
  isLoading: boolean;
  episodes: Array<Episode>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService
  ) {
    this.season = null;
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

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id: number = +params.get("id");
      this.season = AppGlobal.SEASONS.find((season: Season) => season.id === id);
      if (this.season) {
        this.isLoading = true;
        this.getEpisodes();
      }
    });
  }
}
