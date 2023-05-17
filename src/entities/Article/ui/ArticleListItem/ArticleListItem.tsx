/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImEye } from 'react-icons/im';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

import { AppLink } from '@/shared/ui/AppLink/AppLink';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent }
    from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';

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
                        <img
                            src={article.img}
                            className={cls.ArticleImage}
                            alt={article.title}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={cls.ArticleBlock}
                            />
                        ) }
                        <div className={cls.ArticleFooter}>
                            <AppLink to={RoutePath.article_details + article.id} target={target}>
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
                    to={RoutePath.profile + article.user.id}
                >
                    <Avatar size={50} src={article.user.avatar} />
                </AppLink>
            </div>
            <Card className={cls.ArticleCard}>
                <AppLink to={RoutePath.article_details + article.id} target={target} className={cls.ArticleLink}>
                    <div className={cls.ArticleImageWrapper}>
                        <img
                            src={article.img}
                            className={cls.ArticleImageSmall}
                            alt={article.img}
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
