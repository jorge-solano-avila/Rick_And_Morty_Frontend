import { AppGlobal } from "../../app.global";

export interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export class Episode {
  private _id: number = null;
  private _name: string = null;
  private _airDate: Date = null;
  private _episode: string = null;
  private _characters: Array<string> = null;
  private _url: string = null;
  private _created: Date = null;

  constructor(data: EpisodeData) {
    for (let key in data) {
      const property: string = AppGlobal.parseBackendFormat(key);
      if (property in this) {
        switch (key) {
          case "air_date":
            this._airDate = new Date(data.air_date);
            break;
          case "created":
            this._created = new Date(data.created);
            break;
          default:
            this[property] = data[key];
            break;
        }
      }
    }
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get airDate(): Date {
    return this._airDate;
  }

  get episode(): string {
    return this._episode;
  }

  get characters(): Array<string> {
    return this._characters;
  }

  get url(): string {
    return this._url;
  }

  get created(): Date {
    return this._created;
  }
}
