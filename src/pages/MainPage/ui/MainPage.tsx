/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import Fade from '@/widgets/Fade/ui/Fade';
import cls from './MainPage.module.scss';

const MainPage = () => {
    return (
        <Page className={cls.MainPage}>
            <Fade />
        </Page>
    );
};

export default memo(MainPage);
