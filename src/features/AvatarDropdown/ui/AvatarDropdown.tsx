import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyDropdown } from 'shared/ui/Popups';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getAuthUserData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}
export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { t } = useTranslation('articleedit');
    const { className } = props;
    const dispatch = useAppDispatch();
    const authData = useSelector(getAuthUserData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    const isAdminPanelAvailable = isAdmin || isManager;
    if (!authData) {
        return null;
    }

    return (
        <MyDropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
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
                    onClick: onLogout,
                },
            ]}
            trigger={(
                <HStack gap="16">
                    <Avatar size={40} src={authData.avatar} />
                    <span>{authData.username}</span>
                </HStack>
            )}
        />

    );
});
