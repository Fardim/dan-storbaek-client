import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummySb3Component } from './dummy-sb-3.component';

describe('DummySb3Component', () => {
  let component: DummySb3Component;
  let fixture: ComponentFixture<DummySb3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummySb3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummySb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
