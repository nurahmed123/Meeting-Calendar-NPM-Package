import React from 'react';

interface MeetingCalendarProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    username: string;
}
declare const MeetingCalendar: React.FC<MeetingCalendarProps>;

export { MeetingCalendar, type MeetingCalendarProps };
