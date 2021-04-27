import {Component, OnInit, Input, EventEmitter, Output, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

type PasswordType = 'password' | 'text';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder;
  @Output() changed = new EventEmitter<string>();

  value: string;
  isDisabled: boolean;
  passwordType: PasswordType;

  private propagateChange: any = () => {
  }

  private propagateTouched: any = () => {
  }

  constructor() {
    this.passwordType = 'password';
  }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
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

  onKeyup(value: string): void {
    this.value = value;
    console.log(this.value);
    this.propagateChange(value);
    this.changed.emit();
  }

  onBlur(): void {
    this.propagateTouched();
  }

  togglePassword(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
