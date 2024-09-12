import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  
  const corsOption: CorsOptions = {
        origin: true,
        methods: 'POST',
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204
    };
    app.enableCors( corsOption );


  await app.listen(port);
}
bootstrap();
