import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenNameValidator } from '../forbidden-name.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //To access the query parameter we will
  //inject the ActivatedRoute service in the component
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder){}

  queryParam : any

  //Read the value from the query parameter
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.queryParam = params)
  }

  // name = new FormControl()
  //group ==> create the group of controls
  //name, email, mobile are the controls in the group
  profileForm = this.fb.group({
    name:['',{
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        forbiddenNameValidator(new RegExp(/amy/,'i'))
      ]
    }],
    email:['',{
      validators: [
        Validators.required,
        Validators.email      
      ]
    }],
    mobile:['',{
      validators: [
        Validators.required
      ]
    }]
  })

  //This method is used to get 
  //the reference of each control in HTML
  get profileControls(){
    return this.profileForm.controls
  }
}


