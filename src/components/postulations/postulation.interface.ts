export interface IPostulation {
  _id?: string;
  student: any;
  vacant: any;
  postulation_status: any;
  hired: boolean;
  created: Date;
  modified: Date;
  active: boolean;
}