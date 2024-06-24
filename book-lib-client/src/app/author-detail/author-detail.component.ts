import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from '../model/author';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.scss'
})
export class AuthorDetailComponent {
  public authorForm: FormGroup;

  @Input()
  public authorDetails: Author;

  @Input()
  public isEdit: boolean = true;

  @Input()
  public buttonName: string;

  @Input()
  public validateForm: boolean = true;

  @Output()
  public onUpdate: EventEmitter<Author> = new EventEmitter();

  constructor( protected formBuilder: FormBuilder ) {
    this.authorForm = this.formBuilder.group({
      id: [ ],
      fName: [ '', Validators.required ],
      lName: [ '', Validators.required ]
    });
    this.authorForm.controls.id.disable();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if( this.authorDetails ) {
      this.authorForm.controls.id.setValue( this.authorDetails.id );
      this.authorForm.controls.fName.setValue( this.authorDetails.firstName );
      this.authorForm.controls.lName.setValue( this.authorDetails.lastName );
      this.isEdit ? this.authorForm.enable() : this.authorForm.disable();
      this.authorForm.controls.id.disable();
    }
  }

  public onSubmit() {
    if( !this.validateForm || this.authorForm.valid ) {
      const formValues = this.authorForm.getRawValue();
      this.onUpdate.next( formValues );
    }
  }
}
