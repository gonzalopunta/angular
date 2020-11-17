import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.interface';
import { UsuarioDto } from '../models/usuario.dto';

export const collectionName='usuarios'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private db:AngularFirestore
  ) { }

    //CRUD
    //[Create] un usuario
    public createUsuario(usuarioDto: UsuarioDto){

    }

    //[Read] listado usuarios
    public getUsuarios(){
      return this.db.collection<Usuario>(collectionName).valueChanges();
    }

    //[Update] de usuario
    public updateUsuario(){

    }

    //[Delete] de usuario
    public deleteUsuario(){

    }



}
