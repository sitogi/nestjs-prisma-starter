import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { Chance } from 'chance';
import { PrismaService } from 'nestjs-prisma';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { AuthService } from 'src/auth/auth.service';
import { PasswordService } from 'src/auth/password.service';

const chance = new Chance();

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        AuthService,
        JwtService,
        PrismaService,
        PasswordService,
        ConfigService,
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(
        appController.getHello({
          id: 'test',
          createdAt: undefined,
          updatedAt: undefined,
          email: 'email',
          password: 'pass',
          firstname: 'firstName',
          lastname: 'lastName',
          role: 'ADMIN',
        })
      ).toBe('Hello World! lastName');
    });
  });

  describe('hello/:name', () => {
    it('should return "Hello ${name}!"', () => {
      const name = chance.name();
      expect(appController.getHelloName(name)).toBe(`Hello ${name}!`);
    });
  });
});
