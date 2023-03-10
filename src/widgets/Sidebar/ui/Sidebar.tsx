import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { BsJournalRichtext, BsHouseFill } from 'react-icons/bs';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const toggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        // eslint-disable-next-line max-len
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-btn"
                type="button"
                onClick={toggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.XXL}
                square
            >
                {collapsed ? '>' : '<'}

            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    <BsHouseFill className={cls.icon} />

                    <span className={cls.link}>
                        {t('главная')}
                    </span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    <BsJournalRichtext className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
