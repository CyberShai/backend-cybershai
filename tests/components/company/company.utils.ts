import { ICompany } from '../../../src/components/company/company.interface';

export const mockCompany = () => {
  const company: ICompany = {
    name: "Nombre",
    description: "description",
    website: "website",
    logo: "logo",
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return company;
};

// Empty fields

export const badMockCompany1 = () => {
  const company: ICompany = {
    name: "",
    description: "",
    website: "",
    logo: "",
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return company;
};

// No email
export const badMockCompany2 = () => {
  const company: Partial<ICompany> = {
    name: "Nombre", logo: "logo",
    created: new Date(),
    modified: new Date(),
    active: true
  };
  return company as ICompany;
};
