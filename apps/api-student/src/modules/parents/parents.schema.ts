import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {IParents} from './parents.interface';

export type ParentsDocument = ParentsDetails & Document;

@Schema()
export class ParentsDetails implements IParents {
  @Prop()
  studentIds: string[];

  @Prop()
  name: string;

  @Prop()
  age: string;

  @Prop()
  gender: string;

  @Prop()
  race: string;

  @Prop()
  nationality: string;

  @Prop()
  nric: string;

  @Prop()
  occupation: string;

  @Prop()
  employer: string;

  @Prop()
  workAddress: string;

  @Prop()
  workPhone: string;

  @Prop()
  address: string;

  @Prop()
  mobile: string;

  @Prop()
  phone: string;

  @Prop()
  liveWithStudent: boolean;

  @Prop()
  relationshipWithStudent: string;
}

export const ParentsSchema = SchemaFactory.createForClass(ParentsDetails);
