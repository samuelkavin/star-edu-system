import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';

import {IBranches} from './branches.interface';

export class BranchesDto implements IBranches {
  @ApiProperty()
  profileId: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  location: string;
}
