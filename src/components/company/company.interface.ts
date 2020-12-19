export interface ICompany {
  _id?: string;
  name: string;
  description: string;
  website: string;
  logo: string;
  created: Date;
  modified: Date;
  active: boolean;
}