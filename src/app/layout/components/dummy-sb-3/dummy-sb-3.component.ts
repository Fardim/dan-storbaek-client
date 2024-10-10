import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy-sb-3',
  templateUrl: './dummy-sb-3.component.html',
  styleUrl: './dummy-sb-3.component.scss'
})
export class DummySb3Component {
  constructor(private router: Router) {}

  close() {
    this.router.navigate([{ outlets: { sb3: null } }]);
  }
}
