import { useMemo, CSSProperties } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';

 interface AvatarProps {
     className?: string;
     src?: string;
     size?: number;
     alt?: string;
}

export const Avatar = ({
    className, src, size = 100, alt,
}: AvatarProps) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <FaUserCircle style={{ fontSize: '40px' }} />;
    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
