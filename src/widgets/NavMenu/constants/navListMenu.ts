import Friends from 'shared/assets/icons/users-people.svg'
import Notifications from 'shared/assets/icons/notifications.svg'
import Chat from 'shared/assets/icons/chat.svg'
import Loop from 'shared/assets/icons/loop.svg'
import { Routes } from 'shared/constants';

export const navListMenu = [
    { 
        link: "Аниме",
        path: Routes.ANIME
    },
    { 
        link: "Манга",
        path: Routes.MANGA 
    },
    { 
        link: "Персонажи",
        path: Routes.CHARACTERS 
    },
    { 
        link: "Случайное аниме",
        path: '' 
    },
];

export const  user = {
    link: 'user name',
    path: ''
}

export const navListUser = [
    { 
        link: Friends ,
        path: ''
    },
    { 
        link: Notifications,
        path: ''
    },
    { 
        link: Chat,
        path: ''
    },
    { 
        link: Loop,
        path: ''
    },
];
