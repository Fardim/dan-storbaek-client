import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy1',
  templateUrl: './dummy1.component.html',
  styleUrl: './dummy1.component.scss'
})
export class Dummy1Component {
  constructor(private router: Router) {
    
  }
  gotoSb1() {
    this.router.navigate([{ outlets: { sb1: `sb1/dummy-sb-1` } }]);
  }
}
