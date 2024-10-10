import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  constructor(public navService: NavService) {}

  toggleNav() {
    this.navService.toggleNav()
  }
}
