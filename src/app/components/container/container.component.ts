import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  private isFirstVisble: boolean = true;

  public get displayFirst() {
    return this.isFirstVisble;
  }

  ngOnInit(): void {
  }

  toggleDisplayTo(view: number): void {
    this.isFirstVisble = view === 1 ? true : false; 
  }

}
