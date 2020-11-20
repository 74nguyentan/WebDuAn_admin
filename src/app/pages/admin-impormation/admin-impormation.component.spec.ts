import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImpormationComponent } from './admin-impormation.component';

describe('AdminImpormationComponent', () => {
  let component: AdminImpormationComponent;
  let fixture: ComponentFixture<AdminImpormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImpormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImpormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
