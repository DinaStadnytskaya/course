import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
className?: string;
}
const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { t } = useTranslation('translation');
    const { className } = props;
    return (
        <Page data-testid="ForbiddenPage" className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('У вас нет доступа к этой странице!')}
        </Page>
    );
});
export default memo(ForbiddenPage);
