/* eslint-disable plugin-ds/public-api-imports */
/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import cls from './MainPage.module.scss';
import Fade from '@/widgets/Fade/ui/Fade';

const MainPage = () => {
    return (
        <Page className={cls.MainPage}>
            <Fade />
        </Page>
    );
};

export default memo(MainPage);
