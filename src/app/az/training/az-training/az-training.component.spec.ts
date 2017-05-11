import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzTrainingComponent } from './az-training.component';

describe('AzTrainingComponent', () => {
  let component: AzTrainingComponent;
  let fixture: ComponentFixture<AzTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
