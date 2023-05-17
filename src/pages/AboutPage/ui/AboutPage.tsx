import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;

}
const AboutPage = (props: AboutPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.AboutPage, {}, [className])}>
            {t('Про сайт')}
        </Page>
    );
};

export default memo(AboutPage);
