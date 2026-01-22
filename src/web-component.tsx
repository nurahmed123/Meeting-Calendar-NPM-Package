import React from 'react';
import ReactDOM from 'react-dom/client';
import { MeetingCalendar } from './index';

class MeetingCalendarEmbed extends HTMLElement {
    connectedCallback() {
        console.log('MeetingCalendarEmbed: connectedCallback invoked');
        const username = this.getAttribute('username');
        if (!username) {
            console.error('MeetingCalendar: "username" attribute is required.');
            return;
        }

        const mountPoint = document.createElement('div');
        mountPoint.style.width = '100%';
        mountPoint.style.height = '100%';
        this.appendChild(mountPoint);

        const root = ReactDOM.createRoot(mountPoint);
        root.render(
            <MeetingCalendar
                username={username}
                style={{ height: '100%', minHeight: '600px' }} // Default styles for embed
            />
        );
    }
}

// Define the custom element if it hasn't been defined already
if (!customElements.get('meeting-calendar')) {
    customElements.define('meeting-calendar', MeetingCalendarEmbed);
}
