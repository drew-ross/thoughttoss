export interface ISuggestion {
  text: string;
  cols: number;
  next: number | null;
  followup: boolean;
  col1?: string;
  col2?: string;
}

export interface IBlock {
  heading: string;
  cols: number;
  text1: string;
  text2: string;
}
