import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinaryStringRoutingModule } from './binary-string-routing.module';
import { BinaryStringComponent } from './binary-string/binary-string.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BinaryStringComponent
  ],
  imports: [
    CommonModule,
    BinaryStringRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BinaryStringModule { }
