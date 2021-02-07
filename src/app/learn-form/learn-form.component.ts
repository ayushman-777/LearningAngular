import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-learn-form',
  templateUrl: './learn-form.component.html',
  styleUrls: ['./learn-form.component.css']
})
export class LearnFormComponent implements OnInit {

  @ViewChild('f') asdf: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.asdf);
  }
}
