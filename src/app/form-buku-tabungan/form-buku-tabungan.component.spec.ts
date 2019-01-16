import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBukuTabunganComponent } from './form-buku-tabungan.component';

describe('FormBukuTabunganComponent', () => {
  let component: FormBukuTabunganComponent;
  let fixture: ComponentFixture<FormBukuTabunganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBukuTabunganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBukuTabunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
