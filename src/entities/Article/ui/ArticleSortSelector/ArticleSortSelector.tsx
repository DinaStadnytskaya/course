/* eslint-disable no-unused-vars */
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '../../model/types/article';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField)=>void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { t } = useTranslation('articledetails');
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('заголовку'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('количеству просмотров'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Card className={cls.SelectCard}>
                <Select
                    options={sortFieldOptions}
                    label={t('Сортировать по')}
                    value={sort}
                    onChange={onChangeSort}
                />
            </Card>
            <Card className={cls.SelectCard}>
                <Select
                    options={orderOptions}
                    label={t('По')}
                    value={order}
                    onChange={onChangeOrder}
                />
            </Card>
        </div>
    );
});
