import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAlternativeComponent } from './add-new-alternative.component';

describe('AddNewAlternativeComponent', () => {
  let component: AddNewAlternativeComponent;
  let fixture: ComponentFixture<AddNewAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAlternativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
