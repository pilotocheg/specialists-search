import type { Sex } from 'api/types';
import { formatDistanceToNow } from 'date-fns';
import { ru as ruLocale } from 'date-fns/locale/ru';

export const getLastOnlineText = (sex: Sex, lastOnline: string) => {
  const distance = formatDistanceToNow(lastOnline, { locale: ruLocale });

  return `Был${sex === 2 ? 'а' : ''} ${distance} назад`;
};
