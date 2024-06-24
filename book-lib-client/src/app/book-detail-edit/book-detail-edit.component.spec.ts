import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailEditComponent } from './book-detail-edit.component';

describe('BookDetailEditComponent', () => {
  let component: BookDetailEditComponent;
  let fixture: ComponentFixture<BookDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
