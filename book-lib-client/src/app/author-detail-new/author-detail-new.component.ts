import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorService } from '../service/author.svc';
import { Router } from '@angular/router';
import { Author } from '../model/author';

@Component({
  selector: 'app-author-detail-new',
  templateUrl: './author-detail-new.component.html',
  styleUrl: './author-detail-new.component.scss'
})
export class AuthorDetailNewComponent {

  constructor(
    protected authorService: AuthorService,
    private router: Router ) {}

  public onSubmit( author: Author ) {
    this.authorService.createAuthor( author ).subscribe( createdAuthor => {
      alert( 'Author details created' );
      this.router.navigate([ 'author/', createdAuthor.id ]);
    });
  }
}
