import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly add: string = '+';
  static readonly minus: string = '-';
  static readonly div: string = '/';
  static readonly multiple: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operator: string):number{
    let res: number;

    switch(operator){
      case(CalculatorService.add):
        res = num1 + num2;
      break;
      case(CalculatorService.minus):
        res = num1 - num2;
      break;
      case(CalculatorService.div):
        res = num1 / num2;
      break;
      case(CalculatorService.multiple):
        res = num1 * num2;
      break;
      default:
        res = 0;
    }

    return res;
  }}
