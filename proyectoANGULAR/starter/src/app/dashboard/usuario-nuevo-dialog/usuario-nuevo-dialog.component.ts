import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Usuario } from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-usuario-nuevo-dialog',
  templateUrl: './usuario-nuevo-dialog.component.html',
  styleUrls: ['./usuario-nuevo-dialog.component.scss']
})
export class UsuarioNuevoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UsuarioNuevoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
