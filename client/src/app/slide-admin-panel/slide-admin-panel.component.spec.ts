import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAdminPanelComponent } from './slide-admin-panel.component';

describe('SlideAdminPanelComponent', () => {
  let component: SlideAdminPanelComponent;
  let fixture: ComponentFixture<SlideAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideAdminPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
