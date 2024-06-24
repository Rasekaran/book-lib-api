import { Component } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Author } from '../model/author';
import { AuthorService } from '../service/author.svc';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-detail-view',
  templateUrl: './author-detail-view.component.html',
  styleUrl: './author-detail-view.component.scss'
})
export class AuthorDetailViewComponent {
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

  public onSubmit( event: Author ) {
    this.router.navigate([ 'author/', event.id, 'edit' ]);
  }
}
