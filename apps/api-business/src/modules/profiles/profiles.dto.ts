import {ApiProperty} from '@nestjs/swagger';
import {IsEnum, IsIn, IsNotEmpty, IsOptional} from 'class-validator';
import {IProfiles, StatusEnum} from './profiles.interface';

export class ProfilesDto implements IProfiles {
  @IsNotEmpty()
  @ApiProperty()
  companyName: string;

  @IsNotEmpty()
  @ApiProperty()
  businessRegNumber: string;

  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  phone: string;

  @IsNotEmpty()
  @ApiProperty()
  fax: string;

  @IsNotEmpty()
  @ApiProperty()
  preferredLanguage: string;

  @IsNotEmpty()
  @IsEnum(StatusEnum)
  @ApiProperty({enum: StatusEnum})
  readonly status: StatusEnum;

  // @IsNotEmpty()
  // @ApiProperty()
  // noOfBranches: string;

  // @IsNotEmpty()
  // @ApiProperty()
  // address: Address;

  // @IsNotEmpty()
  // @ApiProperty()
  // directors: IDirector[];
}

export class FilterProfileDto {
  @ApiProperty({
    required: false,
  })
  status: StatusEnum;

  @ApiProperty({
    required: false,
  })
  search: string;
}
