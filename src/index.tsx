"use client";

import React from 'react';

export interface MeetingCalendarProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    username: string;
}

export const MeetingCalendar: React.FC<MeetingCalendarProps> = ({ username, style, ...props }) => {
    return (
        <iframe
            src={`https://calendar.arionys.com/${username}`}
            style={{ width: '100%', height: '100vh', border: 'none', ...style }}
            title={`Meeting Calendar for ${username}`}
            {...props}
        />
    );
};
