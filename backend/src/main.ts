import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:8000',
      'https://localhost:8000',
      'http://localhost:8001',
      'https://localhost:8001',
    ],
  });
  await app.listen(8001);
}
bootstrap();
