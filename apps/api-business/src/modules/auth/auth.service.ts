import {InjectModel} from '@nestjs/mongoose';
import {ConflictException, Injectable, InternalServerErrorException} from '@nestjs/common';
import {Model} from 'mongoose';
import * as bcrypt from 'bcrypt';
import {AuthCredentialDto} from './auth.dto';
import {User, UserDocument} from './user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Users') private usersModel: Model<UserDocument>) {}

  async signUp(authCredential: AuthCredentialDto) {
    const {username, password} = authCredential;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await this.usersModel.create(user);
    } catch (e) {
      if (e.code === 11000) {
        throw new ConflictException('Username already exist!');
      } else {
        throw new InternalServerErrorException();
      }
    }

    return {
      name: username,
      message: 'successfully created!',
    };
  }

  async signIn(authCredential: AuthCredentialDto) {
    const {username, password} = authCredential;
    const userFound = await this.usersModel.findOne({username});
    const user = new User();

    console.log(user);

    // async validatePassword(password: string): Promise<boolean> {
    //     const hash = await bcrypt.hash(password, this.salt);
    //     return hash === this.password;
    //   }

    const hash = await bcrypt.hash(password, );

    // if (userFound && (await user.validatePassword(password))) {
    //   return user.username;
    // } else {
    //   return null;
    // }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
