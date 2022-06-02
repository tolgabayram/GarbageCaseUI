import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGarbagerecordComponent } from './add-edit-garbagerecord.component';

describe('AddEditGarbagerecordComponent', () => {
  let component: AddEditGarbagerecordComponent;
  let fixture: ComponentFixture<AddEditGarbagerecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGarbagerecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGarbagerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
