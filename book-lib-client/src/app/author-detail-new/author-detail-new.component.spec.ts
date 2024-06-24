import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailNewComponent } from './author-detail-new.component';

describe('AuthorDetailNewComponent', () => {
  let component: AuthorDetailNewComponent;
  let fixture: ComponentFixture<AuthorDetailNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorDetailNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDetailNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
