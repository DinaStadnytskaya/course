import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getAuthUserData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string
    articleId: string
}
const ArticleRating = memo((props: ArticleRatingProps) => {
    const { t } = useTranslation('articledetails');
    const { className, articleId } = props;
    const userData = useSelector(getAuthUserData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });
    const [rateArticleMutation] = useRateArticle();
    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);
    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);
    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }
    const rating = data?.[0];

    return (
        <RatingCard
            className={classNames('', {}, [className])}
            rate={rating?.rate}
            onCancel={onCancel}
            onAccept={onAccept}
            title={t('Оцените статью!')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество!')}
            hasFeedback
        />
    );
});
export default ArticleRating;
