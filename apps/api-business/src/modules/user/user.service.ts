import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';

import {Model} from 'mongoose';
import * as bcrypt from 'bcrypt';
import {addHours} from 'date-fns';
import {v4} from 'uuid';
import * as crypto from 'crypto';

import {CreateUserDto} from './dto/create-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import {User} from './interfaces/user.interface';
import {VerifyUserDto} from './dto/verify-user.dto';
import {sendEmail} from '../../utils/emails/verify-email';

@Injectable()
export class UserService {
  HOURS_TO_VERIFY = 4;
  HOURS_TO_BLOCK = 6;
  LOGIN_ATTEMPTS_TO_BLOCK = 5;

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async signup(createUserDto: CreateUserDto): Promise<any> {
    const user = new this.userModel(createUserDto);
    await this.isEmailUnique(user.email);
    await this.isMobileNumberUnique(user.mobileNumber);
    await this.setRegistrationInfo(user);
    await user.save();
    console.log('useruser', user);
    await sendEmail(user);
    return this.buildRegistrationInfo(user);
  }

  async verifyUserEmail(verifyUserDto: VerifyUserDto) {
    const user = await this.findByVerification(verifyUserDto.verification);
    await this.setUserAsVerified(user);

    return {
      email: user.email,
    };
  }

  async signin(loginUserDto: LoginUserDto) {
    const user = await this.findUserByEmail(loginUserDto.email);
    this.isUserBlocked(user);
    await this.checkPassword(loginUserDto.password, user);
    await this.passwordsAreMatch(user);
    return {
      email: user.email,
    };
  }

  //   private methods
  private async isEmailUnique(email: string) {
    const user = await this.userModel.findOne({email});
    if (user) {
      throw new BadRequestException('Email must be unique.');
    }
  }

  private async isMobileNumberUnique(mobileNumber: string) {
    const user = await this.userModel.findOne({mobileNumber});
    if (user) {
      throw new BadRequestException('Mobile number must be unique.');
    }
  }

  private setRegistrationInfo(user): any {
    // user.verification = v4();
    crypto.randomBytes(3, function(err, buffer) {
      user.verification = parseInt(buffer.toString('hex'), 16)
        .toString()
        .substr(0, 6);
    });
    user.verificationExpires = addHours(new Date(), this.HOURS_TO_VERIFY);
  }

  private buildRegistrationInfo(user): any {
    const userRegistrationInfo = {
      fullName: user.fullName,
      email: user.email,
      verified: user.verified,
    };
    return userRegistrationInfo;
  }

  private async findUserByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({email});

    console.log('user1', user);

    if (!user) {
      throw new NotFoundException('Wrong email or password.');
    }
    return user;
  }

  private async checkPassword(attemptPass: string, user) {
    const match = await bcrypt.compare(attemptPass, user.password);
    if (!match) {
      throw new NotFoundException('Wrong email or password.');
    }
    return match;
  }

  private isUserBlocked(user) {
    if (user.blockExpires > Date.now()) {
      throw new ConflictException('User has been blocked try later.');
    }
  }

  private async passwordsAreMatch(user) {
    user.loginAttempts = 0;
    await user.save();
  }

  private async findByVerification(verification: string): Promise<User> {
    const user = await this.userModel.findOne({
      verification,
      verified: false,
    });
    if (!user) {
      throw new BadRequestException('Bad request.');
    }
    return user;
  }

  private async setUserAsVerified(user) {
    user.verified = true;
    await user.save();
  }
}
