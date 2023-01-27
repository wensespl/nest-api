import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(4000);
}
bootstrap();
