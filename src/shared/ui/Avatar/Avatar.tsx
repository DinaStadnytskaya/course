import { useMemo, CSSProperties } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

 interface AvatarProps {
     className?: string;
     src?: string;
     size?: number;
     alt?: string;
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 80,
        height: size || 80,
    }), [size]);
    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};