/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';
import { Page } from 'widgets/Page';
import { ListBox } from 'shared/ui/ListBox';
import { HStack } from 'shared/ui/Stack';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation('mainpage');
    return (
        <Page className={cls.MainPage}>
            <HStack>
                <BugButton />
                {t('Главная страница')}
            </HStack>
        </Page>
    );
};

export default memo(MainPage);
