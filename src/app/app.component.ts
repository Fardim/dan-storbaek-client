import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavService } from './layout/services/nav.service';
import { NavItem } from './constants/nav-item';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { navigationItems } from '@constants/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'maxdetect-ui';
  @ViewChild('appDrawer') appDrawer: MatSidenav | undefined;
  @ViewChild('sideNav1', { static: true }) sideNav1!: MatSidenav;
  @ViewChild('sideNav2', { static: true }) sideNav2!: MatSidenav;
  @ViewChild('sideNav3', { static: true }) sideNav3!: MatSidenav;
  navItems: NavItem[] = [];

  constructor(private navService: NavService, private router: Router) {
  }
  ngOnInit(): void {
    this.navItems = navigationItems;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        if (evt.url.indexOf('(sb1:') > 0) {
          this.sideNav1.open();
        } else {
          this.sideNav1.close();
        }
        if (evt.url.indexOf('sb2:') > 0) {
          this.sideNav2.open();
        } else {
          this.sideNav2.close();
        }
        if (evt.url.indexOf('sb3:') > 0) {
          this.sideNav3.open();
        } else {
          this.sideNav3.close();
        }
      }
    });
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}
