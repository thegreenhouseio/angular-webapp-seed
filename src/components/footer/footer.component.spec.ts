import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('Footer Component Test Suite', () => {
  let fixture;
  let component;
  let de, el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ], // declare the test component
    })
  }));

  //TODO test the template
  beforeEach(() => {
    //fixture = TestBed.createComponent(FooterComponent);
    //component = fixture.componentInstance; // FooterComponent test instance

    //de = fixture.debugElement.query(By.css('p'));
    //el = de.nativeElement;
  });

  it('should test getCopyRight() returns expected date string', () => {
    let currentYear = new Date().getFullYear();
    let copyright = new FooterComponent().getCopyright();

    expect(copyright).toEqual('2014 - ' + currentYear);
  });


});