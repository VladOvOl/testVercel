import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
		origin: ['https://banking-client-nine.vercel.app'],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})
  await app.listen(3000);
}
bootstrap();
