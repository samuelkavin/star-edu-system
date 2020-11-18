import {Module} from '@nestjs/common';
import {DatabaseModule} from './modules/database/database.module';
import {ProfilesModule} from './modules/profiles/profiles.module';
import {BranchesModule} from './modules/branches/branches.module';
import {AuthModule} from './modules/auth/auth.module';
import {UserModule} from './modules/user/user.module';

@Module({
  imports: [DatabaseModule, ProfilesModule, BranchesModule, AuthModule, UserModule],
})
export class AppModule {}
