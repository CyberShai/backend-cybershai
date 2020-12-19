import { IPostulation } from '../../../src/components/postulations/postulation.interface';

export const mockPostulation = () => {
  const postulation: IPostulation = {
    student: "5f820ff76a31ef5ffacc8d8b",
    vacant: "5f820ff76a31ef5ffacc8d8b",
    postulation_status: "5f820ff76a31ef5ffacc8d8b",
    hired: true,
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return postulation;
};

// Empty fields
export const badMockPostulation = () => {
  const postulation: IPostulation = {
    student: "",
    vacant: "",
    postulation_status: "",
    hired: true,
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return postulation;
};

// Incomplete
export const badMockPostulation1 = () => {
  const postulation: Partial<IPostulation> = {
    student: "5f820ff76a31ef5ffacc8d8b",
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return postulation as IPostulation;
};