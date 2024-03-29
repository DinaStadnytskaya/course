import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.ArticleCard}>
                    <div className={cls.ArticleHeader}>
                        <div className={cls.ArticleElement}>
                            <Skeleton width={50} height={50} border="50%" />
                            <Skeleton width={200} height={16} className={cls.ArticleAvatar} />
                        </div>
                        <Skeleton width={100} height={22} className={cls.ArticleAdd} />
                    </div>
                    <div className={cls.ArticleBody}>
                        <Skeleton width={860} height={30} className={cls.ArticleTitle} />
                        <Skeleton width={860} height={200} className={cls.img} />
                    </div>
                    <div className={cls.ArticleFooter}>
                        <Skeleton width={860} height={42} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.SkeletonWrapper}>
                <Skeleton border="50%" height={50} width={50} />
            </div>
            <Card className={cls.ArticleCard}>
                <div className={cls.ArticleImageWrapper}>
                    <Skeleton width="100%" height={200} className={cls.ArticleImageSmall} />
                </div>
                <div className={cls.ArticleInfo}>
                    <Skeleton width="100%" height={22} />
                </div>
                <Skeleton width="100%" height={60} className={cls.ArticleTitle} />
            </Card>
        </div>
    );
});
