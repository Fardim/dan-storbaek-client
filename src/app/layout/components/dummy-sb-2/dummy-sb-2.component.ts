import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy-sb-2',
  templateUrl: './dummy-sb-2.component.html',
  styleUrl: './dummy-sb-2.component.scss'
})
export class DummySb2Component {
  constructor(private router: Router) {}

  close() {
    this.router.navigate([{ outlets: { sb2: null } }]);
  }

  gotoSb3() {
    this.router.navigate([{ outlets: { sb1: `sb1/dummy-sb-1`, sb2: `sb2/dummy-sb-2`, sb3: `sb3/dummy-sb-3` } }]);
  }
}
