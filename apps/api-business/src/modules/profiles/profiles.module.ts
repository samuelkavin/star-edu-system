import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {ProfilesSchema} from './profiles.schema';
import {ProfilesController} from './profiles.controller';
import {ProfilesService} from './profiles.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Profiles', schema: ProfilesSchema}])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}
