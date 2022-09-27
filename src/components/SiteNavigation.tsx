import React, { useState } from 'react';
import { useNavigate, useLocation, NavigateFunction, Link } from 'react-router-dom';
import { Alert, Badge, Grid, Typography } from '@mui/material';
import { NotificationsOutlined } from '@mui/icons-material';
import * as H from 'history';
import { bottomIcons, SiteNavigationIcon, topIcons } from '../types/SiteNavigationIcon';
import { NotificationItem } from '../types/NotificationItem';
import NotificationsList from './NotificationsList';
import RotatingArrow from './RotatingArrow';
import ErrorBoundary from './ErrorBoundary';
import Search from './Search';
import Logo from '../media/logo.svg';
import '../styles/SiteNavigation.css';

interface SiteNavigationProps {
  children: any,
}

function setInitialRoute(
  location: H.Location,
  navigate: NavigateFunction,
): void {
  const [, route] = location.pathname.split('/');
  if (route && route === 'logout') navigate('/');
}

const SiteNavigation = ({ children }: SiteNavigationProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  setInitialRoute(location, navigate);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<Error | undefined>(undefined);
  const [pageName, setPageName] = useState('');
  const [isSideBarOpened, setIsSidebarOpened] = useState(false);
  const [numNotifications] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [notifications] = useState<NotificationItem[]>([]);

  const onClickShowNotifications = () => {
    // Fill in your code for displaying the notifications list here!
  };
  
  const onSearch = (searchString: string) => { 
    // Fill in your code for calling the backend API here!
  };

  const toNavLink = (icon: SiteNavigationIcon) => {
    const IconComponent = icon.component;
    return (
      <Link
        to={icon.path}
        onClick={() => setPageName(icon.key)}
        key={icon.key}
        className={pageName === icon.key ? 'underlined icon' : 'icon'}
      >
        <IconComponent
          fontSize="large"
          htmlColor="#000"
        />
        {!!isSideBarOpened && (
          <Typography variant="body1">{icon.key}</Typography>
        )}
      </Link>
    );
  };

  return (
    <Grid className="SiteNavigation">
      <Grid className="top">
        {error && <Alert severity="error">{error.message}</Alert>}
        {!error && (
          <>
            <Grid className="left">
              <img className="logo" src={Logo} alt="logo" />
            </Grid>
            <Grid className="middle">
              <Search onSearch={onSearch} />
            </Grid>
            <Grid className="right">
              <Badge
                badgeContent={numNotifications}
                color="error"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                overlap="circular"
              >
                <NotificationsOutlined
                  fontSize="large"
                  htmlColor="#000"
                  className="icon"
                  onClick={onClickShowNotifications}
                />
              </Badge>
              {(showNotifications && notifications.length > 0) && (
                <NotificationsList
                  notifications={notifications}
                  onClickShowNotifications={onClickShowNotifications}
                />
              )}
            </Grid>
          </>
        )}
      </Grid>
      <Grid className="bottom">
        <Grid className={isSideBarOpened ? 'left opened' : 'left'}>
          <Grid className="bottom-left-top">
            {topIcons.map(toNavLink)}
          </Grid>
          <Grid className="bottom-left-bottom">
            {bottomIcons.map(toNavLink)}
            <Grid className="rotating-arrow">
              <RotatingArrow onOpen={() => setIsSidebarOpened(!isSideBarOpened)} />
              {!!isSideBarOpened && (
                <Typography variant="body1">Close</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid className="right">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SiteNavigation;
