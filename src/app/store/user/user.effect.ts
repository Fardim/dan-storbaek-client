import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '@services/user.service';
import * as fromUserActions from './user.action';
import { catchError, map, mergeMap, of, take, tap } from 'rxjs';
import { User } from '@models/user.model';

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService
) {}

  loadUserList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.UserLoad),
      tap(() => of(new fromUserActions.UserLoading(true))),
      mergeMap(() =>
        this.userService.getUserList().pipe(
          take(1),
          mergeMap((response: User[]) => [
            new fromUserActions.UserLoadSuccess(response),
            new fromUserActions.UserLoading(false),
          ]),
          catchError((err) => of(new fromUserActions.UserLoading(false)))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.DeleteUser),
      map((action: fromUserActions.DeleteUser) => {
        return action.payload;
      }),
      tap(() => of(new fromUserActions.UserLoading(true))),
      mergeMap((userId: string) =>
        this.userService.deleteUser(userId).pipe(
          take(1),
          mergeMap(() => [
            new fromUserActions.UserLoad(),
          ]),
          catchError((err) => of(new fromUserActions.UserLoading(false)))
        )
      )
    )
  );

  userToUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.UserLoadById),
      map((action: fromUserActions.UserLoadById) => {
        return action.payload;
      }),
      tap(() => of(new fromUserActions.UserLoading(true))),
      mergeMap((userId: string) =>
        this.userService.getUserById(userId).pipe(
          take(1),
          mergeMap((user: User) => [
            new fromUserActions.UpdateUser(user),
            new fromUserActions.UserLoading(false),
          ]),
          catchError((err) => of(new fromUserActions.UserLoading(false)))
        )
      )
    )
  );
}
