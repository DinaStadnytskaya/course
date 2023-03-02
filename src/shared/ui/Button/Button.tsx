/* eslint-disable no-use-before-define */
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?:SizeButton
}
export enum ThemeButton {
    CLEAR='clear',
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

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = SizeButton.XL,
        ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,

    };
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </button>
    );
};
