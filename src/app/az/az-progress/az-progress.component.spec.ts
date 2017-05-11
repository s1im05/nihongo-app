import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzProgressComponent } from './az-progress.component';

describe('AzProgressComponent', () => {
  let component: AzProgressComponent;
  let fixture: ComponentFixture<AzProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
