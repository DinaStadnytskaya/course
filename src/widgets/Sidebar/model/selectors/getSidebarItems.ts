import { createSelector } from '@reduxjs/toolkit';
import { BsJournalRichtext } from 'react-icons/bs';
import { GiCaptainHatProfile } from 'react-icons/gi';
import { MdNotes } from 'react-icons/md';
import { SiHomebridge } from 'react-icons/si';
import { getAuthUserData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getAuthUserData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: SiHomebridge,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: BsJournalRichtext,
                text: 'О сайте',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: GiCaptainHatProfile,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: MdNotes,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
