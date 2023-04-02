/* eslint-disable react/jsx-no-useless-fragment */
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

 interface ProfilePageHeaderProps {
className?: string;
}
export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text
                className={cls.Title}
                title={t('Профиль')}
                align={TextAlign.CENTER}
                theme={TextTheme.SECONDARY}
            />
            {readonly ? (
                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn} onClick={onEdit}>
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
    );
};
