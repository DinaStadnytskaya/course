import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
className?: string;
}

const reloadPage = () => {
    window.location.reload();
};
export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button type="button" onClick={reloadPage} theme={ThemeButton.BACKGROUND_INVERTED}>
                {t('Обновить страницу')}

            </Button>
        </div>
    );
};
