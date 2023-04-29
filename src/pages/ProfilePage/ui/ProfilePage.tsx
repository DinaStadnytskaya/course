/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Profile from 'shared/assets/profile1.png';
import { Page } from 'widgets/Page';
import {
    EditableProfileCard,
} from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();
    if (!id) {
        return (
            <Text
                theme={TextTheme.DANGER}
                size={TextSize.L}
                title={t('Профиль не найден!')}
            />
        );
    }
    return (
        <Page
            className={classNames(
                cls.ProfilePage,
                {},
                [className],
            )}
        >
            <img src={Profile} alt="Profile" className={cls.ProfilePageBackground} />
            <VStack>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};
export default memo(ProfilePage);
