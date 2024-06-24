import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailEditComponent } from './author-detail-edit.component';

describe('AuthorDetailEditComponent', () => {
  let component: AuthorDetailEditComponent;
  let fixture: ComponentFixture<AuthorDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorDetailEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
