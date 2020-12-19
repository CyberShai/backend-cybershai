export interface IVacancy {
  _id?: string;
  vacancy_category: any;
  company: any;
  name: string;
  description: string;
  responsibilities: string;
  min_salary: number;
  max_salary: number;
  created: Date;
  modified: Date;
  active: boolean;
}