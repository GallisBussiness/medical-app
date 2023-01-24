import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

export enum USER_ROLE {
  USER = 'user',
  ADMIN = 'admin',
}

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id: string;

  @Prop({ type: String, unique: true, required: true })
  email: string;

  @Prop({ type: String, required: true })
  prenom: string;

  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String })
  resetPasswordToken: string;

  @Prop({ type: String, default: USER_ROLE.USER })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
