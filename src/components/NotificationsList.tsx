import React from 'react';
import { ErrorOutline, NotificationsNone, ReportProblemOutlined } from '@mui/icons-material';
import { NotificationItem } from '../types/NotificationItem';
import '../styles/NotificationsList.css';

interface NotificationsListProps {
  notifications: NotificationItem[],
  onClickShowNotifications: () => void;
}

const getIcon = (severity: string) => {
  const icons = {
    NOTIFICATION: () => (
      <NotificationsNone
        className="icon"
        htmlColor="#000"
      />
    ),
    WARNING: () => (
      <ReportProblemOutlined
        className="icon"
        htmlColor="#000"
      />
    ),
    CRITICAL: () => (
      <ErrorOutline
        className="icon"
        htmlColor="#000"
      />
    ),
  };
  // @ts-ignore
  return icons[severity] || icons.NOTIFICATION;
};

const NotificationsList = ({ notifications, onClickShowNotifications }: NotificationsListProps) => (
  <div className="NotificationsList">
    <div className="notificationsTopArrow" />
    {notifications.map(({
      name, value, unit, severity,
    }) => (
      <button type="button" className="notificationsItem" onClick={onClickShowNotifications}>
        {getIcon(`${severity}`)}
        {name}
        {' '}
        {value}
        {' '}
        {unit}
      </button>
    ))}
  </div>
);

export default NotificationsList;
