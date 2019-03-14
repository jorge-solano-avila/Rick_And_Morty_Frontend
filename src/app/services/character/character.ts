import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { AppGlobal } from "src/app/app.global";
import { CharacterData } from "src/app/models/character/character";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
  private charactersURL: string = `${AppGlobal.API_URL}character/`;

  constructor(private http: HttpClient) {}

  getAllByIds(ids: Array<number>): Observable<Array<CharacterData>> {
    return this.http.get<Array<CharacterData>>(`${this.charactersURL}${ids}`);
  }
}