import {Component, OnInit, forwardRef, Input, Output, EventEmitter} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {ControlItem, Value} from '../../../models/frontend';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() items: ControlItem[];
  @Input() placeholder;
  @Output() changed = new EventEmitter<Value>();

  value: Value;
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => {
  }

  private propagateTouched: any = () => {
  }

  writeValue(value: Value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
