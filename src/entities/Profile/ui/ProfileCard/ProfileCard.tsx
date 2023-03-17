import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}
export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('профиль')} />
                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>
                    {t('редактировать')}
                </Button>
            </div>
            <div className={cls.content}>
                <Input value={data?.firstname} placeholder={t('Ваше имя')} />
                <Input value={data?.lastname} placeholder={t('Ваша фамилия')} />
            </div>
        </div>
    );
};
