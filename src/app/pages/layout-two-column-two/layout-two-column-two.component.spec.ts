import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwoColumnTwoComponent } from './layout-two-column-two.component';

describe('LayoutTwoColumnTwoComponent', () => {
  let component: LayoutTwoColumnTwoComponent;
  let fixture: ComponentFixture<LayoutTwoColumnTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwoColumnTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwoColumnTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
