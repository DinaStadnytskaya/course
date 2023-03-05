import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Counter />
            {t('Про сайт')}
        </div>
    );
};

export default AboutPage;
