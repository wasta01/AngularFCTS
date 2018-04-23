import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpViewComponent } from './cmp-view.component';

describe('CmpViewComponent', () => {
  let component: CmpViewComponent;
  let fixture: ComponentFixture<CmpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
