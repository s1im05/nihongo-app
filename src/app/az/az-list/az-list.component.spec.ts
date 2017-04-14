import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzListComponent } from './az-list.component';

describe('AzListComponent', () => {
  let component: AzListComponent;
  let fixture: ComponentFixture<AzListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
