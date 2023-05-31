import { createSelector } from '@reduxjs/toolkit';
import { BsJournalRichtext } from 'react-icons/bs';
import { GiCaptainHatProfile } from 'react-icons/gi';
import { MdNotes } from 'react-icons/md';
import { SiHomebridge } from 'react-icons/si';
import { getAuthUserData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getAuthUserData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: SiHomebridge,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: BsJournalRichtext,
                text: 'О сайте',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: GiCaptainHatProfile,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: MdNotes,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
