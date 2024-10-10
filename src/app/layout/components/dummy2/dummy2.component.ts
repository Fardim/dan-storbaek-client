import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy2',
  templateUrl: './dummy2.component.html',
  styleUrl: './dummy2.component.scss'
})
export class Dummy2Component {
  constructor(private router: Router) {
    
  }
  gotoSb1() {
    this.router.navigate([{ outlets: { sb1: `sb1/dummy-sb-1` } }]);
  }
}
