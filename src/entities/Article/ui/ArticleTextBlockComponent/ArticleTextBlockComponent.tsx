import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
className?: string;
}
const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            <p />
        </div>
    );
};
export default memo(ArticleTextBlockComponent);
