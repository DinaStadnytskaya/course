import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
className?: string;
}
const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation('articledetails');
    const { className } = props;
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <p />
        </div>
    );
};
export default memo(ArticleImageBlockComponent);
