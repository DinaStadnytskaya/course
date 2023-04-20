/* eslint-disable max-len */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddNewComment';
import { Page } from 'widgets/Page';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchRecommendations } from '../../model/services/fetchRecommendations/fetchRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import { getRecommendations } from '../../model/slice/recommendationsSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
className?: string;
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const articleRecommendations = useSelector(getRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchRecommendations());
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [
                className,
            ])}
            >
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader className={cls.ArticleDetailsHeader} />
                <ArticleDetails
                    id={id}
                    className={cls.ArticleDetailsBlock}
                />
                <div className={cls.ArticleDetailsRecommendations}>
                    <Text
                        className={cls.ArticleDetailsTitle}
                        size={TextSize.XL}
                        title={t('Рекомендуем')}
                    />
                    <ArticleList
                        className={cls.ArticleDetailsList}
                        articles={articleRecommendations}
                        isLoading={recommendationsIsLoading}
                        target="_blank"
                    />
                </div>
                <div className={cls.ArticleDetailsComments}>
                    <Text
                        className={cls.ArticleDetailsTitle}
                        size={TextSize.L}
                        title={t('комментарии')}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        isLoading={commentsIsLoading}
                        comments={comments}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
