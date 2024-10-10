import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateAllFormFields(formGroup: UntypedFormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof UntypedFormArray) {
        // if the control is FormArray
        for (const c of control.controls) {
          // c is either FormGroup or FormControl
          if (c instanceof UntypedFormGroup) {
            // c is FormGroup
            this.validateAllFormFields(c);
          } else if (c instanceof UntypedFormControl) {
            // c is FormControl
            c.markAsDirty({ onlySelf: true });
          }
        }
      } else if (control instanceof UntypedFormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof UntypedFormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
