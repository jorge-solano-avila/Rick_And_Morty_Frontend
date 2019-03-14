import { Season } from "./models/season/season";

export class AppGlobal {
  static API_URL: string = "https://rickandmortyapi.com/api/";
  static SEASONS: Array<Season> = [new Season({
    id: 1,
    name: "Season 1",
    code: "S01"
  }),
  new Season({
    id: 2,
    name: "Season 2",
    code: "S02"
  }),
  new Season({
    id: 3,
    name: "Season 3",
    code: "S03"
  })];

  static parseBackendFormat(key: string): string {
    const property: string = key.replace(/_(.)/g, (match: string, character: string) => character.toUpperCase());

    return `_${property}`;
  }
}