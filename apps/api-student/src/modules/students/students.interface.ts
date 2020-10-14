export interface ICommonDetails {
  _id: string;
  name: string;
  age: string;
  gender: string;
  race: string;
  nationality: string;
  nric: string;
}

export interface IStudentDetails extends ICommonDetails {
  dob: string;
  healthCondition: string;
  healthComment: string;
  emergencyContact: string;
  status: StudentsStatus;
}

export interface IParents extends ICommonDetails {
  name: string;
  age: string;
  gender: string;
  race: string;
  occupation: string;
  employer: string;
  workAddress: string;
  workPhone: string;
  address?: string;
  mobile: string;
  phone: string;
  nationality: string;
  liveWithStudent: boolean;
  relationshipWithStudent: string;
}

export enum StudentsStatus {
  NEW = 'NEW',
  COMPLETED = 'COMPLETED',
}
