/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImEye } from 'react-icons/im';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';

import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent }
    from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import { getRouteArticleDetails, getRouteProfile } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation('articledetails');
    const {
        className,
        article,
        view,
        target,
    } = props;
    const types = <Text text={article.type.join(',')} className={cls.ArticleTypes} />;
    const views = (
        <div className={cls.ArticleElement}>
            <ImEye />
            <Text text={String(article.views)} className={cls.ArticleViews} />
        </div>
    );
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(
                    cls.ArticleListItem,
                    {},

                    [className, cls[view]],
                )}
            >
                <Card className={cls.ArticleCard}>
                    <div className={cls.ArticleHeader}>
                        <div className={cls.ArticleElement}>
                            <Avatar size={50} src={article.user.avatar} alt={article.user.avatar} />
                            <Text text={article.user.username} className={cls.ArticleAvatar} />
                        </div>
                        <Text text={article.createdAt} className={cls.ArticleAdd} />
                    </div>
                    <div className={cls.ArticleBody}>
                        <Text text={article.title} className={cls.ArticleTitle} />
                        {types}
                        <AppImage
                            src={article.img}
                            className={cls.ArticleImage}
                            alt={article.title}
                            fallback={<Skeleton width="100%" height={200} />}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={cls.ArticleBlock}
                            />
                        ) }
                        <div className={cls.ArticleFooter}>
                            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                                <Button
                                    className={cls.ArticleButton}
                                    theme={ThemeButton.BACKGROUND_INVERTED}
                                >
                                    {t('Читать далее')}
                                </Button>
                            </AppLink>
                            {views}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div
            className={classNames(
                cls.ArticleListItem,
                {},

                [className, cls[view]],
            )}
        >
            <div className={cls.SkeletonWrapper}>
                <AppLink
                    to={getRouteProfile(article.user.id)}
                >
                    <Avatar size={50} src={article.user.avatar} />
                </AppLink>
            </div>
            <Card className={cls.ArticleCard}>
                <AppLink to={getRouteArticleDetails(article.id)} target={target} className={cls.ArticleLink}>
                    <div className={cls.ArticleImageWrapper}>
                        <AppImage
                            src={article.img}
                            className={cls.ArticleImageSmall}
                            alt={article.title}
                            fallback={<Skeleton width="100%" height={200} />}
                        />
                        <Text text={article.createdAt} className={cls.ArticleData} />
                    </div>
                    <div className={cls.ArticleInfo}>
                        {types}
                        {views}
                    </div>
                    <Text
                        text={article.title}
                        className={cls.ArticleTitle}
                    />
                </AppLink>
            </Card>
        </div>

    );
});
