import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEditTabunganComponent } from './from-edit-tabungan.component';

describe('FromEditTabunganComponent', () => {
  let component: FromEditTabunganComponent;
  let fixture: ComponentFixture<FromEditTabunganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromEditTabunganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEditTabunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
