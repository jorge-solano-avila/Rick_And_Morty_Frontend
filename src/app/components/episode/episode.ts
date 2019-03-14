import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { EpisodeData, Episode } from "src/app/models/episode/episode";
import { CharacterData, Character } from "src/app/models/character/character";
import { EpisodeService } from "src/app/services/episode/episode";
import { CharacterService } from "src/app/services/character/character";

@Component({
  selector: "app-episode",
  templateUrl: "./episode.html",
  styleUrls: ["./episode.scss"]
})
export class EpisodeComponent implements OnInit {
  isLoading: boolean;
  charactersIsLoading: boolean;
  episode: Episode;
  characters: Array<Character>;

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private characterService: CharacterService
  ) {
    this.isLoading = true;
    this.charactersIsLoading = true;
    this.episode = null;
    this.characters = [];
  }

  private getEpisode(id: number): void {
    this.episodeService.getById(id)
      .subscribe((response: EpisodeData) => {
        this.episode = new Episode(response);
        this.isLoading = false;
        this.charactersIsLoading = true;
        this.getCharacters();
      });
  }

  private getCharacters(): void {
    const charactersIds: Array<number> = this.episode.characters.map((charactersURLs: string) => {
      const parts: Array<string> = charactersURLs.split("/");

      return +parts[parts.length - 1];
    });
    this.characterService.getAllByIds(charactersIds)
      .subscribe((response: Array<CharacterData>) => {
        this.characters = response.map((characterData: CharacterData) => new Character(characterData));
        this.charactersIsLoading = false;
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
