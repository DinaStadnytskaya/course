import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments';

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
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
