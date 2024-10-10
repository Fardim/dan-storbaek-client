import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import * as userActions from '@store/user/user.action';
import * as fromUsers from '@store/user/user.selector';
import { Store, select } from '@ngrx/store';
import { State as UserState } from '@store/user/user.state';
import { User } from '@models/user.model';
import { Types } from 'mongoose';
import { ValidationService } from '@services/validation.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit, OnDestroy {
  userId = '';
  user: User | null = null;
  userForm: FormGroup | undefined;
  unsubscribeAll$: Subject<boolean> = new Subject<boolean>();
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userStore: Store<UserState>,
    private validationService: ValidationService,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribeAll$)).subscribe(resp => {
      this.userId = resp['userId'];
      if(this.userId === '0') {
        this.createUserForm();
      } else {
        this.userStore.dispatch(new userActions.UserLoadById(this.userId));
      }
    });
    
    this.userStore.pipe(takeUntil(this.unsubscribeAll$), select(fromUsers.userToUpdate)).subscribe(resp => {
      this.user = resp;
      this.createUserForm();
    });

    this.userStore.pipe(takeUntil(this.unsubscribeAll$), select(fromUsers.isLoading)).subscribe(resp => {
      this.isLoading = resp;
    });
  }

  createUserForm() {
    this.userForm = this.fb.group({
      id: [this.user?.id || new Types.ObjectId().toHexString(), [Validators.required]],
      firstName: [this.user?.firstName, [Validators.required]],
      lastName: [this.user?.lastName, []],
      email: [this.user?.email, [Validators.required]],
      age: [this.user?.age || 0, []],
      nickName: [this.user?.nickName, []],
      familyLineage: [this.user?.familyLineage, []],
    })
  }

  save() {
    if(this.userForm?.invalid) {
      this.validationService.validateAllFormFields(this.userForm);
      return;
    }

    if(this.userId === '0') {
      this.userService.createUser(this.userForm?.value).pipe(take(1)).subscribe(resp => {
        this.userStore.dispatch(new userActions.UserLoad());
        this.close();
      });
    } else {
      this.userService.updateUser(this.userForm?.value).pipe(take(1)).subscribe(resp => {
        this.userStore.dispatch(new userActions.UserLoad());
        this.userStore.dispatch(new userActions.UpdateUser(null));
        this.close();
      });
    }
  }

  get firstName(): UntypedFormControl {
    return this.userForm?.get('firstName') as UntypedFormControl;
  }
  get lastName(): UntypedFormControl {
    return this.userForm?.get('lastName') as UntypedFormControl;
  }
  get email(): UntypedFormControl {
    return this.userForm?.get('email') as UntypedFormControl;
  }
  get age(): UntypedFormControl {
    return this.userForm?.get('age') as UntypedFormControl;
  }
  get nickName(): UntypedFormControl {
    return this.userForm?.get('nickName') as UntypedFormControl;
  }
  get familyLineage(): UntypedFormControl {
    return this.userForm?.get('familyLineage') as UntypedFormControl;
  }
  
  close() {
    this.router.navigate([{ outlets: { sb1: null } }]);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(true);
    this.unsubscribeAll$.complete();
  }
}
