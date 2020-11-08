import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';

import {ICommonDetails} from '../students/students.interface';
import {IParents} from './parents.interface';

export class CommonDto implements ICommonDetails {
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

export class ParentsDto extends CommonDto implements IParents {
  @IsNotEmpty()
  @ApiProperty()
  studentIds: string[];

  @IsNotEmpty()
  @ApiProperty()
  occupation: string;

  @IsNotEmpty()
  @ApiProperty()
  employer: string;

  @IsNotEmpty()
  @ApiProperty()
  workAddress: string;

  @IsNotEmpty()
  @ApiProperty()
  workPhone: string;

  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsNotEmpty()
  @ApiProperty()
  mobile: string;

  @IsNotEmpty()
  @ApiProperty()
  phone: string;

  @IsNotEmpty()
  @ApiProperty()
  liveWithStudent: boolean;

  @IsNotEmpty()
  @ApiProperty()
  relationshipWithStudent: string;
}
