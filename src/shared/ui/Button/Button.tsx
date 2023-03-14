/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
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
    CLEAR='clear',
    CLEAR_INVERTED='clearInverted',
    OUTLINE='outline',
    BACKGROUND='background',
    BACKGROUND_INVERTED='backgroundInverted'
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
        theme,
        square,
        disabled,
        size = SizeButton.L,
        ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
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
