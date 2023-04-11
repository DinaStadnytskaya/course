import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Про сайт')}
        </Page>
    );
};

export default memo(AboutPage);
