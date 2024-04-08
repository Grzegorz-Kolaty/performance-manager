export interface Question {
  id: string;
  name?: string;
  category?: string;
  options?: Option[];
  supervisorOptions?: Option[];
  selectedUserOption?: Option;
  userText?: string;
  selectedSupervisorOption?: Option;
  supervisorText?: string;
}

export interface Option {
  id?: string;
  content: string;
  letter?: string;
  points: number;
}
