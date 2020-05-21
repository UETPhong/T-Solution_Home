import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtAdminComponent } from './rt-admin.component';

describe('RtAdminComponent', () => {
  let component: RtAdminComponent;
  let fixture: ComponentFixture<RtAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
