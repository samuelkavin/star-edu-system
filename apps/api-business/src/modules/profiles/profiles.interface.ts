export interface IProfiles {
  companyName: string;
  businessRegNumber: string;
  email: string;
  phone: string;
  fax?: string;
  status: StatusEnum;
  preferredLanguage: string;

  // noOfBranches: string;
  // address: Address;
  // directors: IDirector[];
}

export interface IDirector {
  name: string;
  nric: string;
  gender: string;
  race: string;
  designation: string;
  contactNumber?: string;
  email?: string;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  passcode: string;
  state: string;
  country: string;
}

export enum StatusEnum {
  Created = 'CREATED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED',
}
