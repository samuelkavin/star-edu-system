import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './modules/database/database.module';
import {StudentsModule} from './modules/students/students.module';
import { ParentsModule } from './modules/parents/parents.module';
@Module({
  imports: [DatabaseModule, StudentsModule, ParentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
