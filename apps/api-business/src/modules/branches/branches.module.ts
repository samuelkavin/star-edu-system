import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {BranchesService} from './branches.service';
import {BranchesController} from './branches.controller';
import {BranchesSchema} from './branches.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Branches', schema: BranchesSchema}])],
  providers: [BranchesService],
  controllers: [BranchesController],
})
export class BranchesModule {}
