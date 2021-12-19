import { StatusType } from '../../../types';

export interface SchemaType {
  status: StatusType;
  data?: SchemaItem | null;
}

export interface SchemaItem {
  id: string;
  title: string;
  required: string[];
  properties: Item[];
}
export type TypeType = 'input' | 'textaria' | 'boolean' | 'select';
export type OptionsType = { label: string; value: string };
interface Item {
  id: string;
  title: string;
  type: TypeType;
  options?: OptionsType[];
}
