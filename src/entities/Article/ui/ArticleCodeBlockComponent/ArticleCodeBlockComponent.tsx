import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
className?: string;
}
const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <p />
        </div>
    );
};
export default memo(ArticleCodeBlockComponent);
