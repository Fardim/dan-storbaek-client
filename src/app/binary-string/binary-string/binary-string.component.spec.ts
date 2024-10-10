import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryStringComponent } from './binary-string.component';

describe('BinaryStringComponent', () => {
  let component: BinaryStringComponent;
  let fixture: ComponentFixture<BinaryStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinaryStringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BinaryStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
