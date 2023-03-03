/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                size={SizeButton.L}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Tempora earum, iure officia odio
                veritatis quo atque assumenda harum vero, nihil quod eos quia quam.
                Commodi nemo porro voluptas itaque eveniet!

            </Modal>
        </div>
    );
};
