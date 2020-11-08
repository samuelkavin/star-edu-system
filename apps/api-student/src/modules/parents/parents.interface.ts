import {ICommonDetails} from '../students/students.interface';

export interface IParents extends ICommonDetails {
  studentIds: string[];
  occupation: string;
  employer: string;
  workAddress: string;
  workPhone: string;
  address?: string;
  mobile: string;
  phone: string;
  liveWithStudent: boolean;
  relationshipWithStudent: string;
}
