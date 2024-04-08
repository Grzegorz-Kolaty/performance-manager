import { Question } from "./questions.interface";

export interface Template {
  id?: string;
  name: string;
  timestamp?: Date;
  questions: string[] | Question[];
}
