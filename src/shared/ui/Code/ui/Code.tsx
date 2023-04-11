import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}
export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    return (
        <pre>
            <code className={classNames(cls.Code, {}, [className])}>
                {text}
            </code>
        </pre>
    );
});
