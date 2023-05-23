/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
className?: string;
}
const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(1);
    return (
        // <DynamicModuleLoader>
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Редактирование статьи с ID=') + id
                : t('Создание новой статьи')}
        </Page>
        // </DynamicModuleLoader>
    );
};
export default memo(ArticleEditPage);
