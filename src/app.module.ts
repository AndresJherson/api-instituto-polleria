import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidoService } from './model-service/pedido/pedido.service';
import { RegistroService } from './model-service/registro/registro.service';
import { ConectorService } from './service/conector.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PedidoService, RegistroService, ConectorService],
})
export class AppModule {}
