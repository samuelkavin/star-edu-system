import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {IBranches} from './branches.interface';

export type BranchesDocument = BranchesDetails & Document;

@Schema()
export class BranchesDetails implements IBranches {
  @Prop()
  profileId: string;

  @Prop()
  name: string;

  @Prop()
  location: string;
}

export const BranchesSchema = SchemaFactory.createForClass(BranchesDetails);
