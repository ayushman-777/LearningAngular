import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  signupForm: FormGroup;
  genders = ['male', 'female'];
  forbiddenUserName = ['ayush', 'mayus'];
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([], Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    (<FormArray> this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  // alternative of getting controls of FormArray
  getControls() {
    return (<FormArray> this.signupForm.get('hobbies')).controls;
  }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return {name_is_forbidden: true};
    }
    return null;
  }
}
