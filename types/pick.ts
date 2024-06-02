export interface IPick {
  id: number;
  title: string;
  thumbnail: string;
  content: string;
  likes: number;
  type: PickType;
}
export type PickType =
  | "BOOK"
  | "MOVIE"
  | "ANIME"
  | "MUSIC"
  | "FASHION"
  | "ALCOHOL"
  | "FOOD";
export type ContentExcludedPick = Omit<IPick, "content">;
