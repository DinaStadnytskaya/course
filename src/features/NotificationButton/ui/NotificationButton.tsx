import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { FaRegBell } from 'react-icons/fa';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
className?: string;
}
export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button
                    theme={ThemeButton.CLEAR}
                    className={cls.NavbarIconWrapper}
                >
                    <FaRegBell className={cls.NavbarIcon} />
                </Button>
            )}
        >
            <NotificationList className={cls.NavbarNotificationList} />
        </Popover>

    );
});
