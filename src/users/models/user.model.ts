import 'reflect-metadata';
import { Role } from '@prisma/client';
import { IsEmail } from 'class-validator';

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
