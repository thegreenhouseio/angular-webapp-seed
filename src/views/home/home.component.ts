import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: [ './home.less' ]
})

export class HomeViewComponent {
  private pristineName: string;
  public userForm: FormGroup;

  constructor(private FormBuilder: FormBuilder){
    this.userForm = this.FormBuilder.group({
      name: ''
    })
  }

  submitForm(): void {
    console.log('submit form');
    console.log(this.userForm);
  }
}