import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  @Input() signupTitle = 'Sign up for our newsletter';
  @Input() thankyouMessage = 'Thanks!';

  formData = { name: '', email: '' };
  formSubmitted = false;

  constructor() { }
  ngOnInit() {}

  onSubmit() {
    this.formSubmitted = true;
  }

}
