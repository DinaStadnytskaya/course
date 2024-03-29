import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegBell } from 'react-icons/fa';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';
import { Button } from '@/shared/ui/Button';

interface NotificationButtonProps {
    className?: string;
}
export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer}>
            <FaRegBell className={cls.NavbarIcon} />
        </Button>
    );
    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.NavbarNotificationList} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
