import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val:string) => {
        setValue(val);
    };
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
