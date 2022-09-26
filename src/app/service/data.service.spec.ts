import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { WordList } from '../app-models';

import { DataService } from './data.service';

describe('FetchService', () => {
  let service: DataService;
  let description:string = "To deliver an exceptional shopping experience by offering the best service, value, quality, and freshest products while being good stewards of our environment and giving back to the communities we serve."
  let result:WordList[] = [
    {
        "word": "to",
        "occurances": 2
    },
    {
        "word": "the",
        "occurances": 2
    },
    {
        "word": "and",
        "occurances": 2
    },
    {
        "word": "deliver",
        "occurances": 1
    },
    {
        "word": "an",
        "occurances": 1
    },
    {
        "word": "exceptional",
        "occurances": 1
    },
    {
        "word": "shopping",
        "occurances": 1
    },
    {
        "word": "experience",
        "occurances": 1
    },
    {
        "word": "by",
        "occurances": 1
    },
    {
        "word": "offering",
        "occurances": 1
    }
]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct wordList', () => {
   let res = service.countWords(description);

   expect(res).toEqual(result);
  })
});
