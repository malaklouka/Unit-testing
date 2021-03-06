import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1:any;
  private number2: any ;
  private operation: any ;
  private result: any ;
  private aux_num1:any;
  private aux_num2:any;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
   this.limpar();
  }

  limpar(): void{
    this.number1 = '0';
    this.number2 = '';
    this.result = '';
    this.operation = '';
  }

  addNumber(number: string): void{
    if(this.operation == ''){
      this.number1 = this.concatNumber(this.number1, number);
    }else{
      this.number2 = this.concatNumber(this.number2, number);
    }
  }

  concatNumber(numCurrent: string, numConcat: string): string {
    //case just value 0 or null, restart value
    if(numCurrent === '0' || numCurrent === null){
      numCurrent = '';
    }
    //first value is '.', concat 0 before '.'
    if(numConcat === '.' && numCurrent === ''){
      return '0.';
    }
    //case value is '.' and value contain '.' return value
    if(numConcat === '.' && numCurrent.indexOf('.') > -1){
      return numCurrent;
    }
    return numCurrent + numConcat;
  }

  defineOperation(operation: string): void {
    this.aux_num1 = parseFloat(this.number1).toFixed(2);
    this.aux_num2 = parseFloat(this.number2).toFixed(2);

    if(this.operation === null){
      this.operation = operation;
      return;
    }
    if(this.number2 !== null){
      this.result = this.calculatorService.calcular(parseFloat(this.aux_num1), parseFloat(this.aux_num2), this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null as any;
      this.result = null as any;
    }
  }

  calcular(): void{
    if(this.number2 === null){
      return;
    }
    this.aux_num1 = parseFloat(this.number1).toFixed(2);
    this.aux_num2 = parseFloat(this.number2).toFixed(2);

    this.result = this.calculatorService.calcular(parseFloat(this.aux_num1), parseFloat(this.aux_num2), this.operation);
  }

  get display(): string {
    if(this.result !== null){
      return this.result.toString();
    }
    if(this.number2 !== null){
      return this.number2;
    }
    return this.number1;
  }
}
