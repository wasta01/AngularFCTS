import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpItemViewComponent } from './cmp-item-view.component';

describe('CmpItemViewComponent', () => {
  let component: CmpItemViewComponent;
  let fixture: ComponentFixture<CmpItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
