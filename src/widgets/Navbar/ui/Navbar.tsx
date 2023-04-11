import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthUserData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogOut = useCallback(
        () => {
            dispatch(userActions.logout());
            onCloseModal();
        },
        [dispatch, onCloseModal],
    );
    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR_OUTLINE}
                    className={cls.NavbarButton}
                    size={SizeButton.L}
                    onClick={onLogOut}
                >
                    {t('выйти')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_OUTLINE}
                className={cls.NavbarButton}
                size={SizeButton.L}
                onClick={onOpenModal}
            >
                {t('войти')}
            </Button>
            {isAuthModal
             && (
                 <LoginModal
                     isOpen={isAuthModal}
                     onClose={onCloseModal}
                 />
             )}

        </div>
    );
});
