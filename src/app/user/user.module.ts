import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { USER_MODULE_STATE_NAME } from '@store/user/user.selector';
import { userReducers } from '@store/user/user.state';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from '@store/user/user.effect';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(USER_MODULE_STATE_NAME, userReducers.users),
    EffectsModule.forFeature([UserEffect]),
  ]
})
export class UserModule { }
