/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '@/app.module';
import { AppConfigService } from '@/config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const appConfig = app.get<AppConfigService>(AppConfigService);
  app.enableCors()
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.use(cookieParser());
  app.use(compression());
  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('VirtualShelf')
    .setDescription('API DOCS - EXAMEN ^^')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.init();

  await app.listen(Number(appConfig.port));
}

bootstrap();
