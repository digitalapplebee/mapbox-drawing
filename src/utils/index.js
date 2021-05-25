import { DECIMAL_SEPARATOR } from './constants';

export const setSquareFormat = (item, fix = DECIMAL_SEPARATOR) =>
  `${Number(item).toFixed(fix)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');