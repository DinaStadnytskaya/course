import { StateSchema } from 'app/providers/StoreProvider';

export const gettAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';
export const gettAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
