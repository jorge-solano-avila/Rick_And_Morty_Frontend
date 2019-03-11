export class Season {
  private _name: string;
  private _code: string;

  constructor(data: {
    name: string,
    code: string
  }) {
    this._name = data.name;
    this._code = data.code;
  }

  get name(): string {
    return this._name;
  }

  get code(): string {
    return this._code;
  }
}
