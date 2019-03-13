import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { EpisodeData, Episode } from "src/app/models/episode/episode";
import { EpisodeService } from "../../services/episode/episode";
import { AppGlobal } from "../../app.global";

@Component({
  selector: "app-episode",
  templateUrl: "./episode.html",
  styleUrls: ["./episode.scss"]
})
export class EpisodeComponent implements OnInit {
  episode: Episode;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) {
    this.episode = null;
    this.isLoading = true;
  }

  private getEpisode(id: number): void {
    this.episodeService.getById(id)
      .subscribe((response: EpisodeData) => {
        this.episode = new Episode(response);
        this.isLoading = false;
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id: number = +params.get("id");
      if (id) {
        this.isLoading = true;
        this.getEpisode(id);
      }
    });
  }
}
