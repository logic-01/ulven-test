import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { WordList } from 'src/app/app-models';
import { DataService } from 'src/app/service/data.service';

import { SecondComponent } from './second.component';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;
  let mockDataService = {
    isListLoaded$(): Observable<boolean> {
      return of(true);
    },
    getwordList$(): Observable<WordList[]> {
      return of([{word: 'of', occurances: 10}]);
    },
    load(): Observable<void> {
      return of();
    }

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComponent ],
      providers: [{provide: DataService, useValue: mockDataService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
