interface SeasonData {
  id: number;
  name: string;
  code: string;
}

export class Season {
  private _id: number = null;
  private _name: string = null;
  private _code: string = null;

  constructor(data: SeasonData) {
    this._id = data.id;
    this._name = data.name;
    this._code = data.code;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get code(): string {
    return this._code;
  }
}