import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzTrainingListComponent } from './az-training-list.component';

describe('AzTrainingListComponent', () => {
  let component: AzTrainingListComponent;
  let fixture: ComponentFixture<AzTrainingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzTrainingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzTrainingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
