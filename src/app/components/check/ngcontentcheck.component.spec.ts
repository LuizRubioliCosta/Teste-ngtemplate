import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentcheckComponent } from './ngcontentcheck.component';

describe('NgcontentcheckComponent', () => {
  let component: NgcontentcheckComponent;
  let fixture: ComponentFixture<NgcontentcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcontentcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
