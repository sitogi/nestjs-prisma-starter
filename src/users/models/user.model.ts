import 'reflect-metadata';
import { IsEmail } from 'class-validator';
import { Role } from '@prisma/client';
import { BaseModel } from 'src/common/models/base.model';
import { Post } from 'src/posts/models/post.model';


export class User extends BaseModel {
  @IsEmail()
  email: string;

  firstname?: string;

  lastname?: string;

  role: Role;

  posts?: [Post] | null;

  password: string;
}
