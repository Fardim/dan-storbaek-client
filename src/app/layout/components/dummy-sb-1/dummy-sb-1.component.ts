import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy-sb-1',
  templateUrl: './dummy-sb-1.component.html',
  styleUrl: './dummy-sb-1.component.scss'
})
export class DummySb1Component {
  constructor(private router: Router) {}

  close() {
    this.router.navigate([{ outlets: { sb1: null } }]);
  }

  gotoSb2() {
    this.router.navigate([{ outlets: { sb1: `sb1/dummy-sb-1`, sb2: `sb2/dummy-sb-2` } }]);
  }
}
