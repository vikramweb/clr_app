import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridModalComponent } from './grid-modal.component';

describe('GridModalComponent', () => {
  let component: GridModalComponent;
  let fixture: ComponentFixture<GridModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
