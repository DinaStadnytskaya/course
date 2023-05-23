import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { DynamicModuleLoader, ReducersList }
    from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from
    '../../model/slice/loginSlice';
import { getLoginUsername } from
    '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from
    '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from
    '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
  className?: string;
  onSuccess:()=>void;
}
const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount // eslint-disable-next-line i18next/no-literal-string
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации!')} theme={TextTheme.PRIMARY} size={TextSize.M} />
                {error && (
                    <Text
                        theme={TextTheme.ERROR}
                        text={t('Tакого пользователя не существует!')}
                    />
                )}
                <Input
                    autofocus
                    type="text"
                    placeholder={t('Введите имя')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    theme={ThemeButton.BACKGROUND}
                    size={SizeButton.L}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('ввести')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default LoginForm;
