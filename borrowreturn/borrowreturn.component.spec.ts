import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowreturnComponent } from './borrowreturn.component';

describe('BorrowreturnComponent', () => {
  let component: BorrowreturnComponent;
  let fixture: ComponentFixture<BorrowreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowreturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
