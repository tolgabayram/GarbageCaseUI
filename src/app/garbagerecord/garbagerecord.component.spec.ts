import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbagerecordComponent } from './garbagerecord.component';

describe('GarbagerecordComponent', () => {
  let component: GarbagerecordComponent;
  let fixture: ComponentFixture<GarbagerecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarbagerecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbagerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
