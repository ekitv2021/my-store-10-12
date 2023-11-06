import { Component, OnInit } from '@angular/core';
import { Sample } from './sample';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //ps: ProductService ==> ps = new ProductService()
  //Here we are inject the instance of the Service class
  //private or public access can be given this variable
  constructor(private ps: ProductService){}

  title = 'my-store';

  colors = ['red','blue','green','yellow','magenta',
        'purple','pink','violet']

  age = 40

  ngOnInit(): void {
    //when we declare variables inside the method
    //we use let, var or const keyword

    //using new keyword we are creating the object/instance
    //of the Sample class
    let s = new Sample(); 

    //Now we will class the method using the variable 
    //that contains the instance of the Sample class
    console.log(s.getMessage());  

    console.log("From the service class: " + this.ps.appName)

    console.log("Sum = " + this.ps.add(6,4))
  }
}
