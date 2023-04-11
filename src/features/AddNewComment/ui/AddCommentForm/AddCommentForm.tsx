/* eslint-disable no-unused-vars */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { gettAddCommentFormError, gettAddCommentFormText }
    from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { addCommentFormActions, addCommentFormReducer }
    from '../../model/slice/addCommentFormSlice';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { t } = useTranslation('articledetails');
    const { className, onSendComment } = props;
    const dispatch = useAppDispatch();
    const text = useSelector(gettAddCommentFormText);
    const error = useSelector(gettAddCommentFormError);
    const onCommentTextChange = useCallback((value) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите ваш комментарий')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button theme={ThemeButton.CLEAR} onClick={onSendHandler}>{t('Отправить')}</Button>
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(AddCommentForm);
