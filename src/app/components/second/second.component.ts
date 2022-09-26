import { Component, OnInit } from '@angular/core';
import { filter, Observable, switchMap } from 'rxjs';
import { WordList } from 'src/app/app-models';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  constructor(private dataService: DataService) {}

  searchValue!: string;
  wordList$!: Observable<WordList[]>;

  ngOnInit(): void {
    this.wordList$ = this.dataService.isListLoaded$().pipe(
      filter((isLoaded) => isLoaded),
      switchMap(() => this.dataService.getwordList$())
    );
  }

  onLoad() {
    this.dataService.load(this.searchValue).subscribe();
  }
}
