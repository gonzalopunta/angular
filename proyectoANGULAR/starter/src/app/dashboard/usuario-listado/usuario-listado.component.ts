import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { MatDialog } from '@angular/material';
import { UsuarioNuevoDialogComponent } from '../usuario-nuevo-dialog/usuario-nuevo-dialog.component';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.scss']
})
export class UsuarioListadoComponent implements OnInit {

  listadoUsuarios:Usuario[];
  displayedColumns: string[] = ['Es_Admin', 'Email', 'Nombre', 'Apellidos','Peso','Edad','Telefono','Fecha Nacimiento'];
  constructor(private usuarioService:UsuariosService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsuario();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UsuarioNuevoDialogComponent, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  loadUsuario(){
    this.usuarioService.getUsuarios().subscribe(resp=> {
      this.listadoUsuarios=resp;
    });
  }
}
