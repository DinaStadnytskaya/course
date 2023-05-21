import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { PageLoader } from '../../../../widgets/PageLoader';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<PageLoader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
