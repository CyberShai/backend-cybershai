export interface IStudent {
  _id?: string;
  student_id: string;
  cohort: any;
  coach_tp: any;
  first_name: string;
  last_name: string;
  email: string;
  email_for_intros: string;
  github: string;
  linkedin: string;
  photo: string;
  created: Date;
  modified: Date;
  active: boolean;
}