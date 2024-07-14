import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactGridWrapperComponent } from './react-grid-wrapper.component';

describe('ReactGridWrapperComponent', () => {
  let component: ReactGridWrapperComponent;
  let fixture: ComponentFixture<ReactGridWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactGridWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactGridWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
