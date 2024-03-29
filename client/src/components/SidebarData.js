import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/pet',
        icon: <FaIcons.FaRegListAlt />,
        className: 'nav-text'
    },
    {
        title: 'AddPet',
        path: '/pet/addpet',
        icon: <FaIcons.FaPlus />,
        className: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/pet/about',
        icon: <FaIcons.FaUsers />,
        className: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/pet/contact',
        icon: <FaIcons.FaPhoneAlt />,
        className: 'nav-text'
    }
]