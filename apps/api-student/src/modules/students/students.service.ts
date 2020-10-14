import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {StudentDto} from './students.dto';
import {IStudentDetails} from './students.interface';
import {CreateStudentDetail, StudentDocument} from './students.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Students')
    private readonly studentsModel: Model<StudentDocument>,
  ) {}

  async createStudent(
    createStudent: StudentDto,
  ): Promise<{name: string; code: number; message: string}> {
    const {
      _id,
      name,
      status,
      dob,
      healthCondition,
      healthComment,
      emergencyContact,
      age,
      gender,
      race,
      nationality,
      nric,
    } = createStudent;

    const student = new this.studentsModel({
      _id,
      name,
      status,
      dob,
      healthCondition,
      healthComment,
      emergencyContact,
      age,
      gender,
      race,
      nationality,
      nric,
    });
    await this.studentsModel.create(student);

    return {
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
