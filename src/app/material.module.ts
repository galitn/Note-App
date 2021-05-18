import { NgModule } from '@angular/core';

import {
 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
   
    MatToolbarModule,
    MatIconModule,
   MatButtonModule,
   MatInputModule,
   MatFormFieldModule,
   MatCardModule,
   MatSnackBarModule,
   MatInputModule,
   MatFormFieldModule,
   MatTooltipModule

  ],
  exports: [
   
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule

  ]
})
export class MaterialModule {}