export class Articulo{

    id:number;
    foto:string;
    nombre:string;
    descripcion:string;
    color:string;
    talla:number;
    cantidad:number;
    rebajado:boolean;
    precio:number;
    cantidadRebaja: number;
    precioRebaja: number;


    constructor(id:number, foto:string,  nombre:string, descripcion:string,
    color:string, talla:number,rebajado:boolean, precio:number,
    cantidadRebaja:number){
        this.id = id;
        this.foto = foto;
        this.nombre = nombre;
        this.descripcion =descripcion;
        this.color = color;
        this.talla = talla;
        this.rebajado = rebajado;
        this.cantidad = 1;
        this.precio = precio;
        this.cantidadRebaja = cantidadRebaja;
        if(rebajado==true){
            this.precioRebaja = precio - (precio*cantidadRebaja/100);
        }else{
            this.precioRebaja = 0;
        }

    }

}