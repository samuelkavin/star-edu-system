import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop({
    index: {unique: true},
  })
  username: string;

  @Prop()
  password: string;

  @Prop()
  salt: string;

  //   async validatePassword(password: string): Promise<boolean> {
  //     const hash = await bcrypt.hash(password, this.salt);
  //     return hash === this.password;
  //   }
}

export const UserSchema = SchemaFactory.createForClass(User);
