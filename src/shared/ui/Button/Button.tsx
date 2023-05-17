/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
    disabled?: boolean;
    children?: ReactNode;
}
export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_OUTLINE='clearOutline',
    CLEAR_INVERTED='clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED='outlineInverted',
    BACKGROUND='background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    OUTLINE_RED='outlineRed'
}
export enum SizeButton {
    M='size_m',
    L='size_l',
    XL='size_xl',
    XXL='size_xxl'

}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        square,
        disabled,
        size = SizeButton.M,
        ...otherProps
    } = props;

    const mods:Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,

    };
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </button>
    );
});
