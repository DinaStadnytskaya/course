import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

// eslint-disable-next-line max-len
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => (import('./AddCommentForm')));
