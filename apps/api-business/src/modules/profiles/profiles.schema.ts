import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Address, IDirector, IProfiles, StatusEnum} from './profiles.interface';

export type ProfilesDocument = ProfilesDetails & Document;

@Schema()
export class ProfilesDetails implements IProfiles {
  @Prop()
  companyName: string;

  @Prop()
  businessRegNumber: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  fax: string;

  @Prop()
  status: StatusEnum;

  @Prop()
  preferredLanguage: string;

  // @Prop()
  // noOfBranches: string;

  // @Prop()
  // address: Address;

  // @Prop()
  // directors: IDirector[];
}

export const ProfilesSchema = SchemaFactory.createForClass(ProfilesDetails);
