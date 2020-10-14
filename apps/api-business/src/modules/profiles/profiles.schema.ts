import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {IProfiles} from './profiles.interface';

export type ProfilesDocument = ProfilesDetails & Document;

@Schema()
export class ProfilesDetails implements IProfiles {
  @Prop()
  name: string;

  @Prop()
  designation: string;

  @Prop()
  nric: string;
}

export const ProfilesSchema = SchemaFactory.createForClass(ProfilesDetails);
