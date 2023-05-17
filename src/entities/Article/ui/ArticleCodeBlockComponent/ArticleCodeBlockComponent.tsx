/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineCopy } from 'react-icons/ai';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation('articledetails');
    const { className, block } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(block.code);
    }, [block.code]);

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [
            className])}
        >
            <Button onClick={onCopy} className={cls.CopyBtn} theme={ThemeButton.CLEAR}>
                <AiOutlineCopy />
            </Button>
            <Code text={block.code} />
        </div>
    );
});
