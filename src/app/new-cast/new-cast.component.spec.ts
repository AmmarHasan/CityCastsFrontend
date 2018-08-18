import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCastComponent } from './new-cast.component';

describe('NewCastComponent', () => {
  let component: NewCastComponent;
  let fixture: ComponentFixture<NewCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
