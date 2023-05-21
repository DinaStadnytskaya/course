/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ImEye } from 'react-icons/im';
import { FcCalendar } from 'react-icons/fc';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from
    '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/ui/Avatar/Avatar';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent }
    from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleBlock } from '../../model/types/article';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation('articledetails');
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const renderBlock = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);
    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;
    if (isLoading) {
        content = (
            <div className={cls.SceletonWrapper}>
                <Skeleton className={cls.CircleSceleton} border={'50%'} width={200} height={200} />
                <Skeleton className={cls.SquareSceleton} border={'0%'} width={300} height={32} />
                <Skeleton className={cls.SquareSceleton} border={'0%'} width="100%" height={24} />
                <Skeleton className={cls.SquareSceleton} border={'0%'} width="100%" height={200} />
                <Skeleton className={cls.SquareSceleton} border={'0%'} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.ArticleDetailsAvatarWrapper}>
                    <Avatar
                        className={cls.ArticleDetailsAvatar}
                        src={article?.img}
                        alt={article?.img}
                        size={240}
                    />
                </div>
                <Text
                    className={cls.ArticleDetailsText}
                    theme={TextTheme.PRIMARY}
                    title={article?.title}
                    text={article?.subtitle}
                    align={TextAlign.LEFT}
                    size={TextSize.S}
                />
                <div className={cls.TextWrapper}>
                    <ImEye />
                    <Text
                        theme={TextTheme.PRIMARY}
                        align={TextAlign.LEFT}
                        text={String(article?.views)}
                        size={TextSize.S}
                    />
                </div>
                <div className={cls.TextWrapper}>
                    <FcCalendar />
                    <Text
                        theme={TextTheme.PRIMARY}
                        align={TextAlign.LEFT}
                        text={article?.createdAt}
                        size={TextSize.S}
                    />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
