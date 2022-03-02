import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should verify 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css("#btn3"));

    let btnSom = fixture.debugElement.query(By.css("#btnSom"));
    let btn2 = fixture.debugElement.query(By.css("#btn2"));
    let btnCalcular = fixture.debugElement.query(By.css("#btnCalcular"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSom.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    display.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });
  it('should verify 3 - 4 = -1', () => {
    let btn3 = fixture.debugElement.query(By.css("#btn3"));
    let btnSub = fixture.debugElement.query(By.css("#btnSub"));
    let btn4 = fixture.debugElement.query(By.css("#btn4"));
    let btnCalcular = fixture.debugElement.query(By.css("#btnCalcular"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSub.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    display.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('-1');
  });
});
