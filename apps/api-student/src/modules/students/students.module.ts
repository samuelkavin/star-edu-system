import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {StudentSchema} from './students.schema';
import {StudentsController} from './students.controller';
import {StudentsService} from './students.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Students', schema: StudentSchema}])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
