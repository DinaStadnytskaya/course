import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/Theme';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import Icon from 'shared/assets/icons/Icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}
            onClick={toggleTheme}
        >
            {/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */}
            <Icon className={cls.ThemeIcon} />
        </Button>
    );
});
export default ThemeSwitcher;
