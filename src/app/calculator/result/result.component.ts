import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges, OnInit {
//Here we will declare two variable 
//as two values will be coming as the input from
//the parent component

  @Input()
  num1!:number;
  @Input()
  num2!:number;

  @Output()
  resultEmitter = new EventEmitter<string>();

  result = 0;

  ngOnChanges(): void {
    console.log('ngOnChange is called')
    // console.log(this.result)
    // console.log(this.num1)
    // console.log(this.num2)
    this.result = this.num1 + this.num2
    this.resultEmitter.emit("The result coming from child = " 
                            + this.result)
    // console.log(this.result)
  }

  ngOnInit(): void {
      console.log('ngOnInit is called')
      this.result = 0
  }
}
