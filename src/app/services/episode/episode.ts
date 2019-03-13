import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { AppGlobal } from "../../app.global";
import { EpisodeData } from "../../models/episode/episode";

export interface EpisodesResponse {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: Array<EpisodeData>
}

@Injectable({
  providedIn: "root"
})
export class EpisodeService {
  private episodesURL: string = `${AppGlobal.API_URL}episode/`;

  constructor(private http: HttpClient) {}

  getAllBySeason(season: string): Observable<EpisodesResponse> {
    return this.http.get<EpisodesResponse>(`${this.episodesURL}?episode=${season}`);
  }
}