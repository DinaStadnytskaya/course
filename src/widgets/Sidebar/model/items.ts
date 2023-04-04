import { IconType } from 'react-icons/lib';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { BsJournalRichtext } from 'react-icons/bs';
import { SiHomebridge } from 'react-icons/si';
import { GiCaptainHatProfile } from 'react-icons/gi';
import { MdNotes } from 'react-icons/md';
import { VscSaveAs } from 'react-icons/vsc';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: IconType;
    authOnly?: boolean;

}
export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная страница',
        Icon: SiHomebridge,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: BsJournalRichtext,
    },
    {
        path: RoutePath.profile,
        text: 'Страница профиля',
        Icon: GiCaptainHatProfile,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: MdNotes,
        authOnly: true,
    },
    // {
    //     path: RoutePath.article_details,
    //     text: 'Страница статьи',
    //     Icon: VscSaveAs,
    // },
];
