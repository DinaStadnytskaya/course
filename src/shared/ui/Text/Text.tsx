/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    ERROR = 'error'
}
export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}
export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
 }

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;

}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        size = TextSize.S,
        align = TextAlign.LEFT,
        'data-testid': dataTestId = 'Text',
    } = props;
    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title
                && (
                    <HeaderTag
                        className={cls.title}
                        data-testid={`${dataTestId}.Header`}
                    >
                        {title}
                    </HeaderTag>
                )}
            {text
                && (
                    <p
                        className={cls.text}
                        data-testid={`${dataTestId}.Paragraph`}
                    >
                        {text}
                    </p>
                )}
        </div>
    );
});
