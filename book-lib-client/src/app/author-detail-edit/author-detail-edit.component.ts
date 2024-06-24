import { Component } from '@angular/core';
import { Author } from '../model/author';
import { Observable, map, switchMap } from 'rxjs';
import { AuthorService } from '../service/author.svc';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-detail-edit',
  templateUrl: './author-detail-edit.component.html',
  styleUrl: './author-detail-edit.component.scss'
})
export class AuthorDetailEditComponent {
  public authorDetails: Observable<Author>;

  constructor(
    protected authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router ) {

    this.authorDetails = this.getPathParamId().pipe(
      switchMap( id => this.authorService.getAuthorDetails( id ) ),
    );
  }

  protected getPathParamId(): Observable<number> {
    return this.route.paramMap.pipe(
      map( params => +( params.get('id') || 1 ))
    )
  }

  public onSubmit( author: Author ) {
    this.authorService.updateAuthor( author ).subscribe({ complete: () => {
      alert( 'Author details updated' );
      this.router.navigate([ 'author/', author.id ]);
    }})
  }
}
