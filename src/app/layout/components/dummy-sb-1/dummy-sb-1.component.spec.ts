import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummySb1Component } from './dummy-sb-1.component';

describe('DummySb1Component', () => {
  let component: DummySb1Component;
  let fixture: ComponentFixture<DummySb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummySb1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummySb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
