import { Component } from '@angular/core';

@Component({
  selector: 'seed-footer',
  templateUrl: './footer.html',
  styleUrls: [ './footer.less' ]
})

export class FooterComponent {
  private STARTING_YEAR: number = 2014;
  private currentYear: number;

  constructor(){
    this.currentYear = new Date().getFullYear();
  }

  getStartingYear(): number {
    return this.STARTING_YEAR;
  }

  getCurrentYear(): number {
    return this.currentYear;
  }
}