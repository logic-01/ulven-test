import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  
  form!: FormGroup;
  headingContentLength$!: Observable<number>;
  descriptionContentLength$!: Observable<number>;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      heading: new FormControl('', [Validators.maxLength(30), Validators.required]),
      description: new FormControl('', [Validators.maxLength(50), Validators.required])
    })

    this.headingContentLength$ = this.getLengthOfContent('heading');
    this.descriptionContentLength$ = this.getLengthOfContent('description');
  }

  get heading(): FormControl {
    return this.form.get('heading') as FormControl;
  }

  
  getLengthOfContent(control: string) {
    if(control && this.form.contains(control)) {
      return this.form.controls[control].valueChanges.pipe(
        map((content: string) => content.length),
        startWith(0)
      )
    }
    return of(0);
  }


  

}
