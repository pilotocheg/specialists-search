import { useDispatch, type UseDispatch } from 'react-redux';

import type { AppDispatch } from '../store';

export const useAppDispatch: UseDispatch<AppDispatch> = useDispatch;
