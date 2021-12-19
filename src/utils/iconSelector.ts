import { IconType } from 'react-icons';
import icons from '../fixtures/icons';

export interface IIcon {
  icon?: IconType | string;
}
export const IconSelector = ({ icon }: IIcon) => {
  if (typeof icon == 'undefined') return;
  if (typeof icon == 'string') {
    return icons[icon];
  }
  return icon({});
};
