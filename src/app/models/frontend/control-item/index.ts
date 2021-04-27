export type Value = number | string | boolean;
import {Icon} from '../icon';

export interface ControlItem {
  value: Value;
  label: string;
  icon?: Icon;
}
