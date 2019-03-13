import { SimpleLocationData, Location } from "../location/location";
import { AppGlobal } from "../../app.global";

export enum CharacterStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown"
}

export enum CharacterGender {
  Female = "Female",
  Male = "Male",
  Genderless = "Genderless",
  Unknown = "unknown"
}

export interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: SimpleLocationData;
  location: SimpleLocationData;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export class Character {
  private _id: number = null;
  private _name: string = null;
  private _status: CharacterStatus = null;
  private _species: string = null;
  private _type: string = null;
  private _gender: CharacterGender = null;
  private _origin: Location = null;
  private _location: Location = null;
  private _image: string = null;
  private _episode: Array<string> = null;
  private _url: string = null;
  private _created: Date = null;

  constructor(data: CharacterData) {
    for (let key in data) {
      const property: string = AppGlobal.parseBackendFormat(key);
      if (property in this) {
        switch (key) {
          case "origin":
            this._origin = new Location(data.origin);
            break;
          case "location":
            this._location = new Location(data.location);
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

  get status(): CharacterStatus {
    return this._status;
  }

  get species(): string {
    return this._species;
  }

  get type(): string {
    return this._type;
  }

  get gender(): CharacterGender {
    return this._gender;
  }

  get origin(): Location {
    return this._origin;
  }

  get location(): Location {
    return this._location;
  }

  get image(): string {
    return this._image;
  }

  get url(): string {
    return this._url;
  }

  get created(): Date {
    return this._created;
  }
}
