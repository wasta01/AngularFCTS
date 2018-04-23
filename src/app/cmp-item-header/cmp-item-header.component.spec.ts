import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpItemHeaderComponent } from './cmp-item-header.component';

describe('CmpItemHeaderComponent', () => {
  let component: CmpItemHeaderComponent;
  let fixture: ComponentFixture<CmpItemHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpItemHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
