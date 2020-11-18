import {Document} from 'mongoose';

export interface User extends Document {
  email: string;
  mobileNumber: string;
  password: string;
}
