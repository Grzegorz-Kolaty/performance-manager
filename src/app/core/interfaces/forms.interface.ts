import { Question } from "./questions.interface";

export interface Form {
  id?: string;
  name: string;
  status?: Status;
  users?: string[];
  questions?: Question[];
  endTimestamp: Date | undefined;
  startTimestamp: Date | undefined;
}

export interface Category {
  id?: string;
  text: string;
}

export enum Status {
  All = "",
  Todo = "todo",
  Finished = "finished",
  WaitingForStart = "waitingForStart",
}
