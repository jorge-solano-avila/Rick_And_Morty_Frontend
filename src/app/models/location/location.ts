import { AppGlobal } from "../../app.global";

export interface SimpleLocationData {
  name: string;
  url: string;
}

export interface LocationData {
  id?: number;
  name: string;
  type?: string;
  dimension?: string;
  residents?: Array<string>;
  url: string;
  created?: string;
}

export class Location {
  private _id: number = null;
  private _name: string = null;
  private _type: string = null;
  private _dimension: string = null;
  private _residents: Array<string> = null;
  private _url: string = null;
  private _created: Date = null;

  constructor(data: LocationData) {
    for (let key in data) {
      const property: string = AppGlobal.parseBackendFormat(key);
      if (property in this) {
        switch (key) {
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
}
