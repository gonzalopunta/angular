import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule
} from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { UsuariosService } from './../service/usuarios.service';
import {MatTableModule} from '@angular/material/table';
import { UsuarioNuevoDialogComponent } from './usuario-nuevo-dialog/usuario-nuevo-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlexLayoutModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
   ],
  declarations: [DashboardComponent,
     UsuarioListadoComponent,
     UsuarioNuevoDialogComponent
    ],
    entryComponents: [
      UsuarioNuevoDialogComponent
    ]
,
  providers:[
    UsuariosService
  ]
})
export class DashboardModule {}
