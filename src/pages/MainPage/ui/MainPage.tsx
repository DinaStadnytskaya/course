/* eslint-disable i18next/no-literal-string */
import { Page } from 'widgets/Page';
import Fade from 'widgets/Fade/ui/Fade';
import { memo } from 'react';
import cls from './MainPage.module.scss';

const MainPage = () => {
    return (
        <Page className={cls.MainPage}>
            <Fade />
        </Page>
    );
};

export default memo(MainPage);
