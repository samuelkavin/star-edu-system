import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {FilterProfileDto, ProfilesDto} from './profiles.dto';
import {IProfiles, StatusEnum} from './profiles.interface';
import {ProfilesService} from './profiles.service';

@ApiTags('Profile')
@Controller('profile')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({status: HttpStatus.FORBIDDEN, description: 'Forbidden'})
  @ApiOperation({
    operationId: 'createCompanyProfile',
    summary: 'Create company profile',
  })
  @UsePipes(ValidationPipe)
  async createCompanyProfile(@Body() createBusinessProfile: ProfilesDto): Promise<IProfiles> {
    console.log('ssasdasdasd');
    return this.profileService.createCompanyProfile(createBusinessProfile);
  }

  @Put(':profileId')
  @ApiParam({
    name: 'profileId',
    type: 'string',
    description: 'Profile Id',
    required: true,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'Update particular profile details is failed',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.BAD_GATEWAY,
    description: 'Internal communication error',
    type: Error,
  })
  @ApiOperation({
    operationId: 'updateCompanyProfile',
    summary: 'Update a particular profile details',
  })
  async updateCompanyProfile(
    @Param('profileId') profileId: string,
    @Body() body: ProfilesDto,
  ): Promise<any> {
    return this.profileService.updateCompanyProfile(profileId, body);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all profiles list',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'Get profiles validation is failed',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.BAD_GATEWAY,
    description: 'Internal communication error',
    type: Error,
  })
  @ApiOperation({
    operationId: 'getAllProfiles',
    summary: 'Return all profiles list',
  })
  @ApiQuery({name: 'status', enum: StatusEnum, required: false})
  async getAllProfiles(@Query() filter: FilterProfileDto): Promise<IProfiles[]> {
    console.log('filter', filter);
    return await this.profileService.getAllProfiles(filter);
  }

  @Get(':profileId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all branches that belong to particular company',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'Get particular profile details is failed',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.BAD_GATEWAY,
    description: 'Internal communication error',
    type: Error,
  })
  @ApiOperation({
    operationId: 'getAllCompanyBranches',
    summary: 'Get single profile details',
  })
  async getAllCompanyBranches(@Param('profileId') profileId: string) {
    return await this.profileService.getAllCompanyBranches(profileId);
  }
}
