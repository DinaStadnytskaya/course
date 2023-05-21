import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/Theme';
import Icon from '@/shared/assets/icons/Icon.svg';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import cls from './ThemeSwitch.module.scss';

interface ThemeSwitchProps {
    className?: string;
}

export const ThemeSwitch = memo(({ className }: ThemeSwitchProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitch, {}, [className, cls[theme]])}
            onClick={toggleTheme}
        >
            <Icon className={cls.ThemeIcon} />
        </Button>
    );
});
