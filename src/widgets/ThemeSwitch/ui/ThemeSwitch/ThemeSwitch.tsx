import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import Icon from '@/shared/assets/icons/Icon.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import cls from './ThemeSwitch.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

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
