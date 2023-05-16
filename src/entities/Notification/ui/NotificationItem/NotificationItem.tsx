import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/Notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}
export const NotificationItem = memo((props: NotificationItemProps) => {
    const { t } = useTranslation();
    const { className, item } = props;
    const content = (
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    );
    if (item.href) {
        return (
            <a
                className={cls.NotificationLink}
                href={item.href}
            >
                {content}
            </a>
        );
    }
    return content;
});
