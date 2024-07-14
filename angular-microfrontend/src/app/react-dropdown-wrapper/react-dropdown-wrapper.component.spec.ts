import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactDropdownWrapperComponent } from './react-dropdown-wrapper.component';

describe('ReactDropdownWrapperComponent', () => {
  let component: ReactDropdownWrapperComponent;
  let fixture: ComponentFixture<ReactDropdownWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactDropdownWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactDropdownWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
