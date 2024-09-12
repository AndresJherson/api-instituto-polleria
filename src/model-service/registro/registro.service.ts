import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConectorService } from 'src/service/conector.service';
import { PedidoService } from '../pedido/pedido.service';

@Injectable()
export class RegistroService {

    tableName = "registro";

    constructor(
        private conector: ConectorService,
        private pedidoService: PedidoService
    )
    {}


    async getId()
    {
        return await this.conector.getId( this.tableName );
    }


    async create( json: any )
    {
        const id = await this.getId();

        const affectedRows = await this.conector.exectueNonQuery(
            `
                insert into ${this.tableName} values (
                    :id,
                    :dni,
                    :nombre,
                    :apellido,
                    :direccion,
                    :celular
                )
            `,
            {
                id: id ?? null,
                dni: json.dni ?? null,
                nombre: json.nombre ?? null,
                apellido: json.apellido ?? null,
                direccion: json.direccion ?? null,
                celular: json.celular ?? null,
            }
        );

        json.pedidos = json.pedidos ?? [];

        for( const pedido of json.pedidos ) {

            pedido.registroId = id;

            await this.pedidoService.create( pedido );
        }

        if ( affectedRows === 0 ) throw new InternalServerErrorException( 'NINGUN DATO HA SIDO INSERTADO' );

        return {
            affectedRows,
            message: "Registro exitoso"
        };
    }
}
