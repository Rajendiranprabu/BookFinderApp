import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprestComponent } from './exprest.component';

describe('ExprestComponent', () => {
  let component: ExprestComponent;
  let fixture: ComponentFixture<ExprestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExprestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExprestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
