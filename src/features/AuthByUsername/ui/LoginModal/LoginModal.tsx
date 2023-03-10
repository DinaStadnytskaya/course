import { Suspense } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { PageLoader } from 'widgets/PageLoader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;

}
export const LoginModal = ({
    isOpen, onClose,
}: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<PageLoader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
