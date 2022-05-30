import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentplansComponent } from './ngcontentplans.component';

describe('NgcontentplansComponent', () => {
  let component: NgcontentplansComponent;
  let fixture: ComponentFixture<NgcontentplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcontentplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
