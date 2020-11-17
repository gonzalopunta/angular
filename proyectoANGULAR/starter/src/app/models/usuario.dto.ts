export class UsuarioDto {
    constructor(
        public Nombre: string,
        public Apellidos: string,
        public Edad:number,
        public Email:string,
        public Es_Admin:boolean,
        public Peso:number,
        public Telefono:number,
        public FechaNacimiento:Date
    ){}

    transformarDto(){
        return{
            Nombre: this.Nombre,
            Apellidos: this.Apellidos,
            Edad: this.Edad,
            Email: this.Email, 
            Es_Admin: this.Es_Admin,
            Peso: this.Peso,
            Telefono: this.Telefono,
            FechaNacimiento: this.FechaNacimiento
        }
    }
}