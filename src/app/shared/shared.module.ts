import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    NotFoundComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NotFoundComponent,
    DeleteConfirmationComponent
  ]
})
export class SharedModule { }
