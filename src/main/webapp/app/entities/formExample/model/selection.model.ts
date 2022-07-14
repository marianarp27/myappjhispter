export interface ISelection {
  optionSelected?: string;
  checkedBox?: Array<string> | null;
}

export class Selection implements ISelection {
  constructor(public optionSelected?: string, public checkedBox?: Array<string> | null) {}
}
