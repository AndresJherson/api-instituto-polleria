import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConectorService } from 'src/service/conector.service';

@Injectable()
export class PedidoService {

    tableName = "pedido";

    constructor(
        private conector: ConectorService
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
                    :registroId,
                    :nombre,
                    :cantidad
                )
            `,
            {
                id: id ?? null,
                registroId: json.registroId ?? null,
                nombre: json.nombre ?? null,
                cantidad: json.cantidad ?? null
            }
        );

        if ( affectedRows === 0 ) throw new InternalServerErrorException( 'NINGUN DATO HA SIDO INSERTADO' );

        return affectedRows;
    }
}
