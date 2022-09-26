import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, catchError, map, Observable, of, pipe, Subject, tap } from 'rxjs';
import { SampleResponse, WordList } from '../app-models';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private wordList$ = new BehaviorSubject<WordList[]>([]);
  private isLoaded$ = new BehaviorSubject<boolean>(false);

  getwordList$(): Observable<WordList[]>{
    return this.wordList$.asObservable();
  }

  isListLoaded$(): Observable<boolean> {
    return this.isLoaded$.asObservable()
  }

  load(url: string) {
    return this.http.get<SampleResponse>(url)
    .pipe(
      map(response => response.description),
      tap(res => console.log(res)),
      map(description => this.countWords(description)),
      map(wordcount => this.wordList$.next(wordcount)),
      map(() => this.isLoaded$.next(true)),
    )
  }

  //public for testing
  public countWords(description: string): WordList[] {
    console.log(description);
    let result:WordList[] = [];
    let wordArray = description.replace(/[.,;?:"']/g, '').toLowerCase().split(' ');
    let uniqueWordArray = Array.from(new Set(wordArray));
    uniqueWordArray.forEach(word => {
      result.push({word: word, occurances: this.getFrequency(wordArray, word)})
    });
    console.log(this.clipList(this.sortResult(result), 10));
    return this.clipList(this.sortResult(result), 10);
  }

  private sortResult(arr: WordList[]) {
    return arr.sort((a,b)=> {
      return b.occurances-a.occurances;
    })
  }

  private clipList(arr: WordList[], reqLen: number) {
    return arr.length < reqLen ? arr : arr.slice(0,reqLen);
  }

  private getFrequency(wordArray: string[], searchWord:string): number {
    return wordArray.filter(word => word === searchWord).length;
  }
}