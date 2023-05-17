import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-absolute-path
import { AppDispatch } from '@/app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
