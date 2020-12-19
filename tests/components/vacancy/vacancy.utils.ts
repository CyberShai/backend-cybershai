import { IVacancy } from '../../../src/components/vacancy/vacancy.interface';

export const mockVacancy = () => {
  const vacancy: IVacancy = {
    vacancy_category: "5f820ff76a31ef5ffacc8d8b",
    company: "5f820ff76a31ef5ffacc8d8b",
    name: "vacancy",
    description: "description",
    responsibilities: "responsibilities",
    min_salary: 1000,
    max_salary: 2000,
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return vacancy;
};

// Empty fields
export const badMockVacancy1 = () => {
  const vacancy: IVacancy = {
    vacancy_category: "",
    company: "",
    name: "",
    description: "",
    responsibilities: "",
    min_salary: 1000,
    max_salary: 2000,
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return vacancy;
};

// Negative number
export const badMockVacancy2 = () => {
  const vacancy: IVacancy = {
    vacancy_category: "5f820ff76a31ef5ffacc8d8b",
    company: "5f820ff76a31ef5ffacc8d8b",
    name: "vacancy",
    description: "description",
    responsibilities: "responsibilities",
    min_salary: -1,
    max_salary: -2,
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return vacancy;
};

// Incomplete
export const badMockVacancy3 = () => {
  const vacancy: Partial<IVacancy> = {
    vacancy_category: "5f820ff76a31ef5ffacc8d8b",
    description: "description",
    min_salary: 1000,
    max_salary: 2000,
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return vacancy as IVacancy;
};