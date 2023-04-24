/* eslint-disable no-unused-vars */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Bolgaria, content: Country.Bolgaria },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Slovakia, content: Country.Slovakia },
    { value: Country.Turkey, content: Country.Turkey },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            value={value}
            defaultValue={t('Укажите страну')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="bottom"
        />
    );
});
