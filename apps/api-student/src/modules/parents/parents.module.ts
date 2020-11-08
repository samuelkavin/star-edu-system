import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {ParentsService} from './parents.service';
import {ParentsController} from './parents.controller';
import {ParentsSchema} from './parents.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Parents', schema: ParentsSchema}])],
  providers: [ParentsService],
  controllers: [ParentsController],
})
export class ParentsModule {}
