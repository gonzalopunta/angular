import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuarioDto } from 'src/app/models/usuario.dto';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-usuario-nuevo-dialog',
  templateUrl: './usuario-nuevo-dialog.component.html',
  styleUrls: ['./usuario-nuevo-dialog.component.scss']
})
export class UsuarioNuevoDialogComponent implements OnInit {
 usuarioDto: UsuarioDto
  constructor(
    public dialogRef: MatDialogRef<UsuarioNuevoDialogComponent>,
    private usuarioService: UsuariosService,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) { }

  ngOnInit() {
  }

  guardar(){
    this.usuarioService.createUsuario(this.usuarioDto);
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }

}
