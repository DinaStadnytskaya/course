import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const onThrow = () => { setError(true); };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <div>
            <Button type="button" onClick={onThrow} theme={ThemeButton.CLEAR_INVERTED}>
                {t('ошибка')}
            </Button>
        </div>
    );
};
