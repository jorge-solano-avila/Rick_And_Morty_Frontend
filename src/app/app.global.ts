export class AppGlobal {
  static API_URL: string = "https://rickandmortyapi.com/api/";

  static parseBackendFormat(key: string): string {
    const property: string = key.replace(/_(.)/g, (match: string, character: string) => character.toUpperCase());

    return `_${property}`;
  }
}