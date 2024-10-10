import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy3',
  templateUrl: './dummy3.component.html',
  styleUrl: './dummy3.component.scss'
})
export class Dummy3Component {
  constructor(private router: Router) {
    
  }
  gotoSb1() {
    this.router.navigate([{ outlets: { sb1: `sb1/dummy-sb-1` } }]);
  }
}
