import React from 'react';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import ShopIcon from '@mui/icons-material/StorefrontOutlined';
import DashboardIcon from '@mui/icons-material/BarChartOutlined';
import AboutIcon from '@mui/icons-material/InfoOutlined';

export type SiteNavigationIcon = {
  key: string;
  component: React.ComponentType<any>;
  path: string;
}

export const topIcons: SiteNavigationIcon[] = [
  {
    key: 'Home',
    path: '/',
    component: HomeIcon,
  },
  {
    key: 'Shop',
    path: '/shop',
    component: ShopIcon,
  },
  {
    key: 'Dashboard',
    path: '/dashboard',
    component: DashboardIcon,
  },
  {
    key: 'About',
    path: '/about',
    component: AboutIcon,
  },
];

export const bottomIcons: SiteNavigationIcon[] = [
  {
    key: 'Settings',
    path: '/settings',
    component: SettingsIcon,
  },
  {
    key: 'Account',
    path: '/account',
    component: AccountIcon,
  },
];