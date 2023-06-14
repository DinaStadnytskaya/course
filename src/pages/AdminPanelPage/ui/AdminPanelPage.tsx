import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AdminPanelPage.module.scss';
import { Page } from '@/widgets/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('translation');

    return (
        <Page
            data-testid="AdminPanelPage"
            className={cls.AdminPanelPage}
        >
            <p>{t('Админка')}</p>
        </Page>
    );
});
export default memo(AdminPanelPage);
