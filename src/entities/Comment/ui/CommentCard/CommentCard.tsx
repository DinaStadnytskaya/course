/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/ui/Avatar/Avatar';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/ui/AppLink/AppLink';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { RoutePath } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}
export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.CommentCardHeader}>
                    <Skeleton width={60} height={60} border="50%" />
                    <Skeleton width={100} height={16} border="0px" />
                </div>
                <div className={cls.CommentCardBody}>
                    <Skeleton width="100%" height={50} border="0px" />
                </div>
            </div>
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                className={cls.CommentCardHeader}
                to={`${RoutePath.profile}${comment.user.id}`}
            >
                {comment.user.avatar
                    ? (
                        <Avatar
                            src={comment.user.avatar}
                            size={60}
                        />
                    )
                    : <div className={cls.AvatarPlug} />}
                <Text title={comment.user.username} size={TextSize.M} />
            </AppLink>
            <div className={cls.CommentCardBody}>
                <Text text={comment.text} />
            </div>
        </div>
    );
});
