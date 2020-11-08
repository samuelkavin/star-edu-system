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
import {ParentsDto} from './parents.dto';
import {IParents} from './parents.interface';
import {ParentsService} from './parents.service';

@ApiTags('Parents')
@Controller('parents')
export class ParentsController {
  constructor(private parentService: ParentsService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Parents details has been successfully created',
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
    operationId: 'createParents',
    summary: 'Create students parents details',
  })
  @UsePipes(ValidationPipe)
  async createParents(@Body() body: ParentsDto): Promise<IParents> {
    const result = await this.parentService.createParents(body);
    return result;
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all parents list',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'Get parents list',
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
    operationId: 'getAllParents',
    summary: 'Get all parents',
  })
  async getAllParents(): Promise<IParents[]> {
    return await this.parentService.getAllParents();
  }

  @Get(':parentId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return single parents details',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'Get parents list',
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
    operationId: 'getParentsById',
    summary: 'Get single parents details',
  })
  async getParentsById(@Param('parentId') parentId: string): Promise<IParents> {
    return await this.parentService.getParentsById(parentId);
  }
}
