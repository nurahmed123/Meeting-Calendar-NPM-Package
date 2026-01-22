# Meeting Calendar - The Ultimate Scheduling & Booking Embed for React & HTML

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/meeting-calendar.svg)](https://www.npmjs.com/package/meeting-calendar)

**Meeting Calendar** is a powerful, lightweight, and responsive scheduling widget designed to seamlessly integrate Arionys booking pages into any website. whether you are building a SaaS platform with **React**, a corporate site with **Next.js**, or a simple landing page with **HTML & CSS**.

Turn your website into a booking engine. Allow clients to schedule meetings, appointments, and consultations directly within your application UI without redirecting them to external pages.

## 🚀 Key Features

- **⚡ Zero Configuration**: Plug and play integration with just a username.
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices.
- **⚛️ React & Next.js Ready**: Built with modern frameworks in mind.
- **🌐 Universal HTML Support**: Works in any static website (WordPress, Webflow, Wix, etc.) via Web Components.
- **🎨 Customizable**: Supports standard style props and attributes to match your brand's look and feel.
- **🏎️ Blazing Fast**: Minimal bundle size ensures your page load speed isn't compromised.

---

## 📦 Installation

Install the package via your favorite package manager:

```bash
# Using npm
npm install meeting-calendar

# Using yarn
yarn add meeting-calendar

# Using pnpm
pnpm add meeting-calendar
```

---

## 🛠️ Usage Guide

### 1️⃣ For React Applications
Ideal for Single Page Applications (SPA) built with Create React App, Vite, or Next.js.

```tsx
import React from 'react';
import { MeetingCalendar } from 'meeting-calendar';

const SchedulePage = () => {
  return (
    <div className="schedule-container">
      <h1 className="text-2xl font-bold mb-4">Book a Consultation</h1>
      
      <MeetingCalendar 
        username="your-username" 
        className="w-full h-screen border-none"
        style={{ minHeight: '700px' }}
      />
    </div>
  );
};

export default SchedulePage;
```

### 2️⃣ For Static HTML / Vanilla JS / WordPress
You don't need React to use this! Thanks to our custom Web Component technology, you can embed the calendar anywhere with a simple script tag.

Include the script near the end of your `<body>` tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book an Appointment</title>
</head>
<body>

    <!-- The actual booking widget -->
    <meeting-calendar 
        username="your-username" 
        style="width: 100%; height: 800px; display: block; border: none;">
    </meeting-calendar>

    <!-- Load the widget logic -->
    <!-- Replace 'latest' with a specific version for production stability -->
    <script src="https://unpkg.com/meeting-calendar/dist/embed.global.js"></script>
    
</body>
</html>
```

### 3️⃣ For Next.js (App Router)
Since this component interacts with the browser (iframe), ensure it renders on the client side.

```tsx
'use client'; // Essential for Next.js App Router

import { MeetingCalendar } from 'meeting-calendar';

export default function BookPage() {
  return (
    <main>
        <MeetingCalendar username="your-username" />
    </main>
  );
}
```

---

## ⚙️ API Reference / Props

| Property | Attribute (HTML) | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `username` | `username` | `string` | ✅ Yes | Your unique Arionys profile username (e.g., `john_doe`). |
| `style` | `style` | `CSSProperties` | ❌ No | Inline styles to control height, width, border, etc. |
| `className` | `class` | `string` | ❌ No | CSS class names for styling with Tailwind or custom CSS. |
| `title` | `title` | `string` | ❌ No | Iframe title for accessibility (a11y). |

> **Note**: Any standard HTML iframe attributes (like `loading="lazy"`, `allow`, `sandbox`) are also supported and passed through to the underlying iframe.

---

## 💡 Why Use This Package?

- **SEO Optimized**: Keeps users on your domain instead of redirecting them, improving your site's bounce rate and session duration.
- **Conversion Focused**: Removing friction from the booking process leads to higher conversion rates for demos and sales calls.
- **Professional Look**: Provides a white-label experience where the scheduling tool feels like a native part of your website.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://nurahmad.com">Nur Ahmad</a>
</p>
