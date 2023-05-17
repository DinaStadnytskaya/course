import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '@/shared/ui/Button/Button';
import cls from './MyDropdown.module.scss';
import popupCls from '../../styles/Popupstyle.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}
interface MyDropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}
const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};
export function MyDropdown(props: MyDropdownProps) {
    const {
        className, items, trigger, direction = 'bottom left',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(
                cls.MyDropdown,
                {},
                [className, popupCls.popup],
            )}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.MenuItems, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <Button
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.MenuItemButton, { [popupCls.active]: active })}
                        >
                            {item.content}
                        </Button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} key={String(item.content)} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} key={String(item.content)} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>

    );
}
