import { IStudent } from '../../../src/components/student/student.interface';

export const mockStudent = () => {
  const student: IStudent = {
    student_id: "",
    cohort: "5f820ff76a31ef5ffacc8d8b",
    coach_tp: "5f820ff76a31ef5ffacc8d8b",
    first_name: "Bryan",
    last_name: "Sanchez",
    email: "sarabryanale@outlook.com",
    email_for_intros: "sarabryanale@outlook.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    photo: "https://linkedin.com",
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return student;
};

// Empty fields

export const badMockStudent1 = () => {
  const student: IStudent = {
    student_id: "",
    cohort: "",
    coach_tp: "",
    first_name: "",
    last_name: "",
    email: "",
    email_for_intros: "",
    github: "",
    linkedin: "",
    photo: "",
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return student;
};

// No email
export const badMockStudent2 = () => {
  const student: IStudent = {
    student_id: "",
    cohort: "5f820ff76a31ef5ffacc8d8b",
    coach_tp: "5f820ff76a31ef5ffacc8d8b",
    first_name: "Bryan",
    last_name: "Sanchez",
    email: "sarabryanale",
    email_for_intros: "sarabryanale",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    photo: "https://linkedin.com",
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return student;
};

// Incomplete
export const badMockStudent3 = () => {
  const student: Partial<IStudent> = {
    student_id: "",
    cohort: "5f820ff76a31ef5ffacc8d8b",
    coach_tp: "5f820ff76a31ef5ffacc8d8b",
    first_name: "Bryan",
    last_name: "Sanchez",
    email: "sarabryanale",
    email_for_intros: "sarabryanale",
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return student as IStudent;
};