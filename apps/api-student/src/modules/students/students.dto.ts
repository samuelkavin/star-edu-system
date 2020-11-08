import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';
import {ICommonDetails, IStudent, StudentsStatus} from './students.interface';

export class CommonDto implements ICommonDetails {
  _id: string;

  @IsNotEmpty()
  @ApiProperty({required: true})
  name: string;

  @ApiProperty()
  age: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  race: string;

  @ApiProperty()
  nationality: string;

  @ApiProperty()
  nric: string;
}

export class StudentDto extends CommonDto implements IStudent {
  @IsNotEmpty()
  @ApiProperty()
  parentsId: string;

  @IsNotEmpty()
  @ApiProperty()
  dob: string;

  @IsNotEmpty()
  @ApiProperty()
  status: StudentsStatus;

  @IsNotEmpty()
  @ApiProperty()
  emergencyContact: string;

  @IsNotEmpty()
  @ApiProperty()
  healthCondition: string;

  @IsNotEmpty()
  @ApiProperty()
  healthComment: string;
}
