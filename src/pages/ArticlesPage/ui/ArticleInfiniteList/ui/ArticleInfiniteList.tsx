import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ArticleInfiniteList.module.scss';
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
} from '../../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../../model/slice/articlesPageSlice';

interface ArticleInfiniteListProps {
className?: string;
}
export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    if (error) {
        return (
            <Text
                title={t('Ошибка при загрузке статей!')}
                size={TextSize.S}
                theme={TextTheme.DANGER}
            />
        );
    }
    return (
        <div className={classNames(cls.ArticleInfiniteList, {}, [className])}>
            <ArticleList isLoading={isLoading} articles={articles} view={view} />
        </div>
    );
});
