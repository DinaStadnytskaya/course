/* eslint-disable no-unused-vars */
import { MdOutlineFormatListNumbered } from 'react-icons/md';
import { AiOutlineBarcode } from 'react-icons/ai';
import { memo } from 'react';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';

 interface ArticleViewSelectorProps {
     className?: string;
     view: ArticleView;
     onViewClick?: (view: ArticleView) => void;
 }

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: <AiOutlineBarcode style={{ fontSize: '40px' }} />,
    },
    {
        view: ArticleView.BIG,
        icon: <MdOutlineFormatListNumbered style={{ fontSize: '40px' }} />,
    },
];
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className, view, onViewClick,
    } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    className={classNames(cls.ViewButton, { [cls.notSelected]: viewType.view !== view }, [className])}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    {viewType.icon}
                </Button>
            ))}
        </div>
    );
});
