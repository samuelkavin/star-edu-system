import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {StudentDto} from './students.dto';
import {IStudent} from './students.interface';
import {CreateStudentDetail, StudentDocument} from './students.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Students')
    private readonly studentsModel: Model<StudentDocument>,
  ) {}

  async createStudent(
    createStudent: StudentDto,
  ): Promise<{_id: string; name: string; code: number; message: string}> {
    const {_id, name} = createStudent;

    const student = new this.studentsModel(createStudent);
    await this.studentsModel.create(student);

    return {
      _id,
      name,
      code: 201,
      message: `Registration success`,
    };
  }

  async getStudents(): Promise<StudentDto[]> {
    const result = await this.studentsModel.find();
    return result;
  }
}
