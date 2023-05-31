import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleDetails, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string
}
export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleDetails(article.id));
        }
    }, [article, navigate]);
    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                className={cls.ArticleDetailsPageButton}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={onBackToList}
            >
                {t('Вернуться к списку')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.ArticleDetailsEditButton}
                    theme={ThemeButton.BACKGROUND_INVERTED}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}

        </div>
    );
});
