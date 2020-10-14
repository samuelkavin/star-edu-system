import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger';
import {ProfilesDto} from './profiles.dto';
import {IProfiles} from './profiles.interface';
import {ProfilesService} from './profiles.service';

@ApiTags('Profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Post('details')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({status: HttpStatus.FORBIDDEN, description: 'Forbidden'})
  @UsePipes(ValidationPipe)
  async createCompanyProfile(@Body() createBusinessProfile: ProfilesDto): Promise<IProfiles> {
    return this.profileService.createCompanyProfile(createBusinessProfile);
  }

  @Put(':profileId')
  @ApiOperation({
    operationId: 'updateCompanyProfile',
    summary: 'update company profile',
  })
  @ApiParam({
    name: 'profileId',
    type: 'string',
    description: 'Profile Id',
    required: true,
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
    description: 'Return all profiles list',
  })
  @ApiOperation({
    operationId: 'getAllCompanies',
    description: 'Return all profiles list',
  })
  async getAllCompanies(): Promise<IProfiles[]> {
    return await this.profileService.getAllCompanies();
  }

  @Get(':profileId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all branches that belong to particular company',
  })
  @ApiOperation({
    operationId: 'getAllCompanyBranches',
    description: "Return all company's branch",
  })
  async getAllCompanyBranches(@Param('profileId') profileId: string) {
    return await this.profileService.getAllCompanyBranches(profileId);
  }
}
