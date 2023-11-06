import { Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  number1!:number;
  number2!:number;

  getResult(event: string){
    console.log("In Parent: " + event)
  }
}


