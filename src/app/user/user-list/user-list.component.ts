import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as userActions from '@store/user/user.action';
import * as fromUsers from '@store/user/user.selector';
import { Store, select } from '@ngrx/store';
import { State as UserState } from '@store/user/user.state';
import { User } from '@models/user.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '@shared/components/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {
  unsubscribeAll$: Subject<boolean> = new Subject<boolean>();
  userList: User[] = [];
  isLoading: boolean = false;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'age', 'nickName', 'familyLineage', 'action'];
  
  constructor(
    private userStore: Store<UserState>,
    private router: Router,
    public dialog: MatDialog,
  ) {
    
  }
  ngOnInit(): void {
    this.userStore.dispatch(new userActions.UserLoading(true));
    this.userStore.dispatch(new userActions.UserLoad());

    this.userStore.pipe(takeUntil(this.unsubscribeAll$), select(fromUsers.getUserList)).subscribe(resp => {
      this.userList = resp;
    });
    this.userStore.pipe(takeUntil(this.unsubscribeAll$), select(fromUsers.isLoading)).subscribe(resp => {
      this.isLoading = resp;
    });
  }

  createUser() {
    this.router.navigate([{ outlets: { sb1: `sb1/users/0`}}]);
  }

  gotoEdit(row: User) {
    this.router.navigate([{ outlets: { sb1: `sb1/users/${row.id}`}}]);
  }

  confirmDelete(row: User) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: "400px",
      data: { message: "Are you sure you want to delete this user?" },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.delete(row);
    });
  }

  delete(row: User) {
    this.userStore.dispatch(new userActions.DeleteUser(row.id));
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(true);
    this.unsubscribeAll$.complete();
  }

}
