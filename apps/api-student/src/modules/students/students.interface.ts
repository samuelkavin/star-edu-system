export interface ICommonDetails {
  name: string;
  age: string;
  gender: string;
  race: string;
  nationality: string;
  nric: string;
}

export interface IStudent extends ICommonDetails {
  parentsId: string;
  dob: string;
  healthCondition: string;
  healthComment: string;
  emergencyContact: string;
  status: StudentsStatus;
}

export enum StudentsStatus {
  NEW = 'NEW',
  COMPLETED = 'COMPLETED',
}
