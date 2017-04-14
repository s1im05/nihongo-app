import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzLiteralComponent } from './az-literal.component';

describe('AzLiteralComponent', () => {
  let component: AzLiteralComponent;
  let fixture: ComponentFixture<AzLiteralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzLiteralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzLiteralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
