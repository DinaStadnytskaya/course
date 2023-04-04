import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
className?: string;
}
const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <p>ArticlesPage</p>
        </div>
    );
};
export default memo(ArticlesPage);
