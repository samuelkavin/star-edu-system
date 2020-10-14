import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {StudentsStatus} from './students.interface';

export type StudentDocument = CreateStudentDetail & Document;

@Schema()
export class CreateStudentDetail {
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
  dob: string;

  @Prop()
  healthCondition: string;

  @Prop()
  healthComment: string;

  @Prop()
  emergencyContact: string;

  @Prop()
  status: StudentsStatus;
}

export const StudentSchema = SchemaFactory.createForClass(CreateStudentDetail);
