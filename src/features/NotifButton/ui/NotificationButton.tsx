import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { FaRegBell } from 'react-icons/fa';
import { NotificationList } from 'entities/Notification';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';


interface NotificationButtonProps {
    className?: string;
}
export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, []);

    const trigger = (
        <div onClick={onOpenDrawer}>
            <FaRegBell className={cls.NavbarIcon} />
        </div>
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
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );

});

