import {Body, Controller, Get, HttpStatus, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {StudentDto} from './students.dto';
import {StudentsService} from './students.service';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @Post('details')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({status: HttpStatus.FORBIDDEN, description: 'Forbidden'})
  @UsePipes(ValidationPipe)
  async createStudent(@Body() createStudent: StudentDto): Promise<any> {
    return this.studentService.createStudent(createStudent);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of student has successfully return',
    type: StudentDto,
    isArray: true,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'This operation is not authorized',
    type: Error,
  })
  async getStudents(): Promise<StudentDto[]> {
    const result = await this.studentService.getStudents();
    return result;
  }
}
