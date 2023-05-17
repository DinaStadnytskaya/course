import React, { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconFill {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ADDITIONAL = 'additional'
}

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    fill?: IconFill;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, fill = IconFill.PRIMARY } = props;

    const mods:Mods = {
        [cls[fill]]: true,
    };
    return (
        <Svg className={classNames(cls.Icon, mods, [className])} />
    );
});
