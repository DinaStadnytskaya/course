import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import cls from './LangSwitch.module.scss';

interface LangSwitchProps {
    className?: string;
    short?: boolean;
}

export const LangSwitch = memo(({ className, short }: LangSwitchProps) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames(cls.LangSwitch, {}, [className])}
            onClick={toggleLang}
            theme={ThemeButton.CLEAR}
        >
            {t(short ? 'рус' : 'русский')}
        </Button>

    );
});
