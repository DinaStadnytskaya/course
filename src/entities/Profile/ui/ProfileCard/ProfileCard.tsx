/* eslint-disable no-unused-vars */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { CircleLoader } from 'react-spinners';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}
export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
                    className,
                ])}
            >
                <CircleLoader color="#d3fdf7" />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля!')}
                    text={t('Обновите страницу!')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.content}>
                <div className={cls.AvatarWrapper}>
                    {data?.avatar && (
                        <Avatar src={data?.avatar} />
                    )}
                </div>
                <Input
                    placeholder={t('Ваше имя')}
                    value={data?.firstname}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    placeholder={t('Ваша фамилия')}
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.ProfileCard__select}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.ProfileCard__select}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
