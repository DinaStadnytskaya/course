/* eslint-disable no-unused-vars */
import { ChangeEvent, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: T;
    label?: T;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}
export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly,
    } = props;
    const { t } = useTranslation();
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.Option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: Mods = {};
    return (
        <div className={classNames(cls.SelectWrapper, mods, [
            className,
        ])}
        >
            <div className={cls.LabelWrapper}>
                {label && (
                    <span className={cls.Label}>
                        {`${label} >`}
                    </span>
                )}
            </div>
            <select
                disabled={readonly}
                className={cls.Select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
