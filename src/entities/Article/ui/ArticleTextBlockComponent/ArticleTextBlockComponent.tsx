import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Text,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;

}
export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation('articledetails');
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text
                    title={block.title}
                    className={cls.TextBlockTitle}
                    size={TextSize.S}
                    theme={TextTheme.PRIMARY}
                    align={TextAlign.LEFT}
                />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.TextBlockParagraph}
                    size={TextSize.S}
                    theme={TextTheme.PRIMARY}
                    align={TextAlign.LEFT}
                />
            ))}
        </div>
    );
});
