const data = {
    dni: "87547814",
    nombre: "Ulises",
    apellido: "Lizandor",
    direccion: "confixcell",
    celular: 51987458154,
    pedidos: [
        {
            nombre: 'pantalla',
            cantidad: 6
        },
        {
            nombre: 'laptop',
            cantidad: 2
        },
    ]
};


fetch( "http://localhost:3000", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify( data )
} )
.then( res => res.json().then( data => console.log( data ) ).catch( error => console.log( error ) ) )
.catch( err => console.log( err ) );