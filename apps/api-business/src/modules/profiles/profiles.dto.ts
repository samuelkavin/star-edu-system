import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';
import {IProfiles} from './profiles.interface';

export class ProfilesDto implements IProfiles {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  designation: string;

  @IsNotEmpty()
  @ApiProperty()
  nric: string;
}
