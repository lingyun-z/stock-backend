export const RESPONSE_CODE: { [key: string]: number } = {
  OK: 200,
  INTERNAL_SERVER_ERROR: 500,
};

export enum SINA_STOCk_API {
  NAME = 0,
  OPENING = 1,
  CLOSING = 2,
  HIGHEST = 4,
  LOWEST = 5,
  VOLUME = 9,
}

export type Stock = {
  name: string;
  opening: number;
  closing: number;
  highest: number;
  lowest: number;
  volume: number;
};
