import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleRecommendationsList.module.scss';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
    const { t } = useTranslation('articledetails');
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);
    if (isLoading || error || !articles) {
        return null;
    }
    return (
        <VStack gap="16" className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
            <Text
                className={cls.ArticleDetailsTitle}
                size={TextSize.M}
                title={t('Рекомендуем')}
            />
            <ArticleList
                className={cls.ArticleDetailsList}
                articles={articles}
                target="_blank"
            />
        </VStack>

    );
});
