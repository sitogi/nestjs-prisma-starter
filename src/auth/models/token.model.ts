import { ApiProperty } from '@nestjs/swagger';

export class Token {
  @ApiProperty({
    description: 'accessToken',
  })
  accessToken: string;

  @ApiProperty({
    description: 'refreshToken',
  })
  refreshToken: string;
}
