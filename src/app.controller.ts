import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RegistroService } from './model-service/registro/registro.service';

@Controller()
export class AppController {

  constructor(
    private registroService: RegistroService
) {}

    @Post()
    getHello(
        @Body() json: any,
    )
    {
        console.log( json );
        return this.registroService.create( json );
    }
}
