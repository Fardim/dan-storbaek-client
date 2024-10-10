import { Component } from '@angular/core';
import { BinaryStringStatus } from '@models/binary-string-analyze-status';
import { BinaryStringService } from '@services/binary-string.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-binary-string',
  templateUrl: './binary-string.component.html',
  styleUrl: './binary-string.component.scss'
})
export class BinaryStringComponent {

  binaryString = '';
  binaryStringStatus: BinaryStringStatus = {
    equalZeroAndOne: false,
    prefixOneGtOrEqualZero: false
  };

  constructor(private binaryStringService: BinaryStringService) {
    
  }

  isBinaryString(str: string) {
    return str.split('').every(char => char === '0'
      || char === '1');
  }

  submit() {
    if(this.binaryString.length && this.isBinaryString(this.binaryString)) {
      this.binaryStringService.analyzeBinaryString(this.binaryString).pipe(take(1)).subscribe(resp => {
        this.binaryStringStatus = resp;
      })
    }
  }
}
