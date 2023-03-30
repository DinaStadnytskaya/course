import { IconType } from 'react-icons/lib';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { BsJournalRichtext, BsHouseFill, BsPersonCircle } from 'react-icons/bs';

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
        Icon: BsHouseFill,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: BsJournalRichtext,
    },
    {
        path: RoutePath.profile,
        text: 'Страница профиля',
        Icon: BsPersonCircle,
        authOnly: true,
    },
];
