import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlternativesComponent } from './edit-alternatives.component';

describe('EditAlternativesComponent', () => {
  let component: EditAlternativesComponent;
  let fixture: ComponentFixture<EditAlternativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlternativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlternativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
