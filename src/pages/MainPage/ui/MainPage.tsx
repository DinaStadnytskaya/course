import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';
import { Page } from 'widgets/Page';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page className={cls.MainPage}>
            <BugButton />
            {t('Главная страница')}
        </Page>
    );
};

export default memo(MainPage);
