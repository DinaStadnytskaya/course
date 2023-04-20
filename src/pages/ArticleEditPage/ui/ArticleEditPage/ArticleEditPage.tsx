/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
className?: string;
}
const reducers: ReducersList = {

};
const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                {isEdit
                    ? t('Редактирование статьи с ID=') + id
                    : t('Создание новой статьи')}
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleEditPage);
