import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UserSchema} from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Users', schema: UserSchema}])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
