import {Component, OnInit, forwardRef, Input, Output, EventEmitter} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

import {ControlItem, Value} from '../../../models/frontend';
import {RadiosModule} from './radios.module';
export {ControlItem, Value} from '../../../models/frontend';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true
    }
  ]
})
export class RadiosComponent implements OnInit, ControlValueAccessor {
  @Input() items: ControlItem[];

  @Output() changed = new EventEmitter<Value>();

  value: Value;
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => { };

  writeValue(value: Value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChanged(value: Value): void {
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  isChecked(value: Value): boolean {
    return this.value === value;
  }

}
