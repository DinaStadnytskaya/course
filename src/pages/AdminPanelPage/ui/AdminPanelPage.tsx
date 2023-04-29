import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
className?: string;
}
const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { t } = useTranslation('translation');
    const { className } = props;
    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            <p>{t('Админка')}</p>
        </Page>
    );
});
export default memo(AdminPanelPage);
