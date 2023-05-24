import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditForm.module.scss';
import { memo } from 'react';

interface ArticleEditFormProps {
    className?: string;
}

export const ArticleEditForm = memo((props: ArticleEditFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.ArticleEditForm, {}, [className])}>
           
        </div>
    );
});