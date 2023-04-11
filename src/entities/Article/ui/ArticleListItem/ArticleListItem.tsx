/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ImEye } from 'react-icons/im';
import { Card } from 'shared/ui/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent }
    from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;

}
export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation('articledetails');
    const { className, article, view } = props;
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, article.id]);

    const types = <Text text={article.type.join(', ')} className={cls.ArticleTypes} />;
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
                <Card className={cls.ArticleCard} onClick={onOpenArticle}>
                    <div className={cls.ArticleHeader}>
                        <div className={cls.ArticleElement}>
                            <Avatar size={50} src={article.user.avatar} />
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
                            <Button
                                className={cls.ArticleButton}
                                onClick={onOpenArticle}
                                theme={ThemeButton.BACKGROUND_INVERTED}
                            >
                                {t('Читать далее')}

                            </Button>
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
            <AppLink
                className={cls.ArticleLink}
                to={`${RoutePath.profile}${article.user.id}`}
            >
                <Avatar size={50} src={article.user.avatar} />
            </AppLink>
            <Card className={cls.ArticleCard} onClick={onOpenArticle}>
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
            </Card>
        </div>
    );
});
