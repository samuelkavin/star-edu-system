import {Module} from '@nestjs/common';
import {DatabaseModule} from './modules/database/database.module';
import {ProfilesModule} from './modules/profiles/profiles.module';
import {BranchesModule} from './modules/branches/branches.module';

@Module({
  imports: [DatabaseModule, ProfilesModule, BranchesModule],
})
export class AppModule {}
