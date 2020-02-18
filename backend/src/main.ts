import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Request} from 'express';
import { Get,Req,Post ,Controller, Redirect } from '@nestjs/common';



@Controller('users')
export class UserController {
  @Get()
  findAll(@Req() request: Request ): string {
    return "This action retrun all Users !!!";
  }

  @Post()
  create(): string {
    return "This action add new users !!"
  }
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
