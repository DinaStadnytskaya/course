/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import Profile from '@/shared/assets/profile1.png';
import { Page } from '@/widgets/Page';
import {
    EditableProfileCard,
} from '@/features/editableProfileCard';
import { VStack } from '@/shared/ui/Stack';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    return (
        <Page
            data-testid="ProfilePage"
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
