import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailViewComponent } from './author-detail-view.component';

describe('AuthorDetailViewComponent', () => {
  let component: AuthorDetailViewComponent;
  let fixture: ComponentFixture<AuthorDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorDetailViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
