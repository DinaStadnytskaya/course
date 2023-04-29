/* eslint-disable react/jsx-tag-spacing */
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAuthUserData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MyDropdown } from 'shared/ui/MyDropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('articleedit');
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthUserData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
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
    const isAdminPanelAvailable = isAdmin || isManager;
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
                    <AppLink
                        to={RoutePath.article_create}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.createBtn}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <MyDropdown
                        direction="bottom right"
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('Админка'),
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: t('Профиль'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Выйти'),
                                onClick: onLogOut,
                            },
                        ]}
                        trigger={(
                            <HStack gap="16">
                                <Avatar size={40} src={authData.avatar} />
                                <span >{authData.username}</span>
                            </HStack>
                        )}
                    />
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
