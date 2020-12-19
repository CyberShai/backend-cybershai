import { IPostulationClosed } from '../../../src/components/postulation-closed/postulation-closed.interface';

export const mockPostulation = () => {
  const postulation: IPostulationClosed = {
    postulation: "5f820ff76a31ef5ffacc8d8b",
    salary: 10000,
    contract: "contract",
    advice: "advice",
    feedback: "feedback",
    start_date: new Date(),
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return postulation;
};

// Empty fields
export const badMockPostulation = () => {
  const postulation: IPostulationClosed = {
    postulation: "",
    salary: 10000,
    contract: "",
    advice: "",
    feedback: "",
    start_date: new Date(),
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return postulation;
};

// Incomplete
export const badMockPostulation1 = () => {
  const postulation: Partial<IPostulationClosed> = {
    postulation: "5f820ff76a31ef5ffacc8d8b",
    salary: 10000,
    contract: "contract",
    start_date: new Date(),
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return postulation as IPostulationClosed;
};