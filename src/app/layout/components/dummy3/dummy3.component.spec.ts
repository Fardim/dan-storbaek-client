import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummy3Component } from './dummy3.component';

describe('Dummy3Component', () => {
  let component: Dummy3Component;
  let fixture: ComponentFixture<Dummy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dummy3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dummy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
