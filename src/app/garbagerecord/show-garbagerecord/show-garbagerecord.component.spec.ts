import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGarbagerecordComponent } from './show-garbagerecord.component';

describe('ShowGarbagerecordComponent', () => {
  let component: ShowGarbagerecordComponent;
  let fixture: ComponentFixture<ShowGarbagerecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGarbagerecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGarbagerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
