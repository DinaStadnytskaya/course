/* eslint-disable react/jsx-no-useless-fragment */
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAuthUserData } from 'entities/User';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string
}
export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const authData = useSelector(getAuthUserData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.EditableProfileCardHeader, {}, [className])}>
            {canEdit && (
                <div className={cls.ButtonsWrapper}>
                    {readonly ? (
                        <Button
                            theme={ThemeButton.OUTLINE}
                            className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('редактировать')}
                        </Button>
                    ) : (
                        <div className={cls.ButtonsBlock}>
                            <Button
                                theme={ThemeButton.OUTLINE_RED}
                                className={cls.editBtn}
                                onClick={onCancelEdit}
                            >
                                {t('отменить')}
                            </Button>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                className={cls.saveBtn}
                                onClick={onSave}
                            >
                                {t('сохранить')}
                            </Button>
                        </div>
                    )}
                </div>
            )}
            <Text
                className={cls.Title}
                title={t('Профиль')}
                align={TextAlign.CENTER}
                theme={TextTheme.SECONDARY}
                size={TextSize.L}
            />

        </div>
    );
};
