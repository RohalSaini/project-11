import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
  signUpform!: FormGroup;
  isValid: Boolean;
  error = '';
  constructor() {
    this.isValid = true
   }

  ngOnInit(): void {
    this.signUpform = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'suggestion': new FormControl(null,[Validators.required])
    }); 
  }
  onSubmit() {
    console.log(this.signUpform);
    if(!this.signUpform.get('username')?.valid) {
      this.isValid = false
      this.error = "Please enter valid username!!";
    } else if(!this.signUpform.get('email')?.valid){
      this.isValid = false
      this.error = "Please enter valid email!!";
    }else if(!this.signUpform.get('suggestion')?.valid){
      this.isValid = false
      this.error = "Please enter suggestion !!";
    } else {
      this.isValid = true
      this.error =''
    }
  }
}
