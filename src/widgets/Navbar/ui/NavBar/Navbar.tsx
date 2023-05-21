/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button/Button';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { getAuthUserData } from '@/entities/User';

import cls from './Navbar.module.scss';
import { LoginModal } from '../../../../features/AuthByUsername';
import { AvatarDropdown } from '../../../../features/avatarDropdown';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('articleedit');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthUserData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
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
                <HStack gap="32" align="center">
                    <AppLink
                        to={RoutePath.article_create}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
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
            <HStack gap="16" className={cls.NavbarLinks}>
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
            </HStack>
        </header>
    );
});
