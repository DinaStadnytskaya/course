import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';

import { ThemeSwitcher } from 'widgets/Themeswitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/Langswitcher';
// @ts-ignore
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
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}>
            <button data-testid="sidebar-btn" type="button" onClick={toggle}>
                {t('сайдбар')}

            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
