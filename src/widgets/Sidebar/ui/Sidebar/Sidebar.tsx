import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { LangSwitch } from 'widgets/LangSwitch';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const toggle = () => {
        setCollapsed((prev) => !prev);
    };
    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
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
            <div className={cls.Items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitch />
                <LangSwitch short={collapsed} />
            </div>
        </div>
    );
});
