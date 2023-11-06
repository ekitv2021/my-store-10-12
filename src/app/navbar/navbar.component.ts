import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  cartCountSubscription$? : Subscription

  constructor(private ps:ProductService){}

  //This variable is for NavbarComponent 
  cartCount = 0

  //to use async pipe for auto subscription and unsubscription
  //we will declare a local variable and assign 
  //it the subject/observable we want to subscribe
  cartCount$ = this.ps.cartCountSubject$

  getCartCount(){
    // this.cartCount = this.ps.cartCount
  }

  ngOnInit(): void {
      // this.cartCountSubscription$ = 
      //             this.ps.cartCountSubject$.subscribe(count => this.cartCount = count)
  }

  ngOnDestroy(): void {
      // this.cartCountSubscription$?.unsubscribe()
  }

  primaryTheme = true

  themeClass = {
    'bg-primary':true,
    'bg-purple':false
  }

  //Function declared inside the class will not have the function keyword
  toggleTheme(){
    //To refer any class variable inside the method/function 
    //we have refer it using the this keyword
    //! ==> not operator will reverse the boolean value
    this.themeClass = {
      'bg-primary':!this.primaryTheme,
      'bg-purple':this.primaryTheme
    }

    this.primaryTheme = !this.primaryTheme 
    //will toggle the value of primaryTheme as false,true,false,true
  }

  homePage(){
    console.log('home page link is clicked')
  }
}

//Function declared outside the class should have function keyword
function someFunction(){
  alert('some function')
}
