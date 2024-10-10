import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummySb2Component } from './dummy-sb-2.component';

describe('DummySb2Component', () => {
  let component: DummySb2Component;
  let fixture: ComponentFixture<DummySb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummySb2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummySb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
