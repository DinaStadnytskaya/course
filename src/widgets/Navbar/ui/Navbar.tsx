import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData, userActions } from 'entities/User';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('articleedit');
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthUserData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogOut = useCallback(
        () => {
            dispatch(userActions.logout());
            onCloseModal();
        },
        [dispatch, onCloseModal],
    );
    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.NavbarLogo}>
                    <AppLink to={RoutePath.main}>
                        <Text
                            size={TextSize.XL}
                            title={t('Айтилиба')}
                            theme={TextTheme.SUCCESS}
                        />
                    </AppLink>
                </div>
                <div className={cls.NavbarLinks}>
                    <AppLink to={RoutePath.article_create}>
                        <Button
                            theme={ThemeButton.CLEAR_OUTLINE}
                            className={cls.NavbarButton}
                            size={SizeButton.L}
                        >
                            {t('Создать статью')}
                        </Button>
                    </AppLink>
                    <Button
                        theme={ThemeButton.CLEAR_OUTLINE}
                        className={cls.NavbarButton}
                        size={SizeButton.L}
                        onClick={onLogOut}
                    >
                        {t('выйти')}
                    </Button>
                </div>
            </header>
        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.NavbarLogo}>
                <AppLink to={RoutePath.main}>
                    <Text
                        size={TextSize.XL}
                        title={t('Айтилиба')}
                        theme={TextTheme.SUCCESS}
                    />
                </AppLink>
            </div>
            <div className={cls.NavbarLinks}>
                <Button
                    theme={ThemeButton.CLEAR_OUTLINE}
                    className={cls.NavbarButton}
                    size={SizeButton.L}
                    onClick={onOpenModal}
                >
                    {t('войти')}
                </Button>
                {isAuthModal
             && (
                 <LoginModal
                     isOpen={isAuthModal}
                     onClose={onCloseModal}
                 />
             )}
            </div>
        </header>
    );
});
