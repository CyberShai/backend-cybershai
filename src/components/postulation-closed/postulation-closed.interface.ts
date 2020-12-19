export interface IPostulationClosed {
  _id?: string;
  postulation: any;
  salary: Number;
  contract: string;
  advice: string;
  feedback: string;
  start_date: Date;
  created: Date;
  modified: Date;
  active: boolean;
}