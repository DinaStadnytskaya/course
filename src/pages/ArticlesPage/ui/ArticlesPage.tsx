/* eslint-disable max-len */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page';
import cls from './ArticlesPage.module.scss';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView }
    from '../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
className?: string;
}
const reducers: ReducersList = {
    articlesPage: articlesPageReducer,

};
const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    const articles = useSelector(getArticles.selectAll);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList(
            { page: 1 },
        ));
    });
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList isLoading={isLoading} articles={articles} view={view} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
