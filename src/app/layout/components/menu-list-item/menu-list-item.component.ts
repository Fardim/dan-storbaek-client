import { Component, HostBinding, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NavItem } from '../../../constants/nav-item';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrl: './menu-list-item.component.scss',
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem = {
    displayName: 'DevFestFL',
    iconName: 'recent_actors',
    route: 'devfestfl',
  };
  @Input() depth: number = 0;

  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
