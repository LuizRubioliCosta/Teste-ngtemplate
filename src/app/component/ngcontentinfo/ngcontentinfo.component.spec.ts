import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentinfoComponent } from './ngcontentinfo.component';

describe('NgcontentinfoComponent', () => {
  let component: NgcontentinfoComponent;
  let fixture: ComponentFixture<NgcontentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcontentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
