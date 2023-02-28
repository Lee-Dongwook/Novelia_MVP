import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { SuccessInterceptor } from './common/interceptors/success.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //CORS Setting
  app.enableCors();

  //SuccessInterceptor Setting
  app.useGlobalInterceptors(new SuccessInterceptor());

  //Validation Setting
  app.useGlobalPipes(new ValidationPipe());

  //Filter Setting
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger Setting
  const config = new DocumentBuilder()
    .setTitle('Novelier Docs')
    .setDescription('Novelier 0.1 API description')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
