/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
    ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { useTheme } from 'app/providers/Theme';


import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const {
        close,
        isClosing,
        isMounted,
    } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });
    const { theme } = useTheme();
    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
