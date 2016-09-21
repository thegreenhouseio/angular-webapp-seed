import { Component } from '@angular/core';

@Component({
  selector: 'seed-footer',
  templateUrl: './footer.html',
  styleUrls: [ './footer.scss' ]
})

export class FooterComponent {
  private readonly startingYear: number = 2014;
  private currentYear: number;

  constructor(){
    this.currentYear = new Date().getFullYear();
  }

  getStartingYear(): number {
    return this.startingYear;
  }

  getCurrentYear(): number {
    return this.currentYear;
  }
}