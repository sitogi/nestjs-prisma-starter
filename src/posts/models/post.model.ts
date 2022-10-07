import { User } from 'src/users/models/user.model';
import { BaseModel } from 'src/common/models/base.model';

export class Post extends BaseModel {
  title: string;
  content?: string | null;
  published: boolean;
  author?: User | null;
}
