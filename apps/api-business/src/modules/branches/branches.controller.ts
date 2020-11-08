import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {BranchesDto} from './branches.dto';
import {IBranches} from './branches.interface';
import {BranchesService} from './branches.service';

@ApiTags('Branches')
@Controller('branches')
export class BranchesController {
  constructor(private branchesService: BranchesService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The branch has been successfully created',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.BAD_GATEWAY,
    description: 'Internal server error',
    type: Error,
  })
  @ApiResponse({status: HttpStatus.FORBIDDEN, description: 'Forbidden'})
  @ApiOperation({
    operationId: 'createBranch',
    summary: 'Create a branch to profile',
  })
  @UsePipes(ValidationPipe)
  async createBranch(@Body() body: BranchesDto): Promise<BranchesDto> {
    const result = await this.branchesService.createCompanyBranch(body);
    return result;
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
    operationId: 'getCompanyBranches',
    summary: "Get all company's branch",
  })
  async getCompanyBranches(@Param('profileId') profileId: string): Promise<IBranches[]> {
    return await this.branchesService.getCompanyBranches(profileId);
  }
}
