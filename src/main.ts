import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
		origin: ['http://localhost:5555'],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})
  await app.listen(3000);
}
bootstrap();
