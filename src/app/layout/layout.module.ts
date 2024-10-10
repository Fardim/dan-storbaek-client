import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MaterialModule } from '../material.module';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { Dummy1Component } from './components/dummy1/dummy1.component';
import { Dummy2Component } from './components/dummy2/dummy2.component';
import { Dummy3Component } from './components/dummy3/dummy3.component';
import { DummySb1Component } from './components/dummy-sb-1/dummy-sb-1.component';
import { DummySb2Component } from './components/dummy-sb-2/dummy-sb-2.component';
import { DummySb3Component } from './components/dummy-sb-3/dummy-sb-3.component';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';



@NgModule({
  declarations: [
    TopNavComponent,
    MenuListItemComponent,
    Dummy1Component,
    Dummy2Component,
    Dummy3Component,
    DummySb1Component,
    DummySb2Component,
    DummySb3Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    TopNavComponent,
    MenuListItemComponent
  ]
})
export class LayoutModule { }
