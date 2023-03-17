import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const reducers : ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(fetchProfileData());
        },
        [dispatch],
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
