# Shiny Navbar

A navbar component built with React⚛️ + TypeScript

## Tech Stack
- React
- TypeScript
- SCSS
- Framer Motion

## How to use?

Get the package with,
```shell
npm install shiny-navbar
```
or
```shell
yarn add shiny-navbar
```

We have a prop for now, it named **items**

**items**, contains the menu items and actions. Required interface is on below.

```typescript jsx
interface NavbarItem {
  customClass?: string
  label: string
  onPerform?(event, item, itemIndex): void
  url?: string
}
```

- __customClass__, gives custom extra class to item.
- __label__, holds the visible string for item.
- __onPerform__, is a simple onClick event.
- __url__ is for extra onClick handler. If item has **url**, it goes on new tab.

Call it on your project:

```typescript jsx
import React from "react";
import { ShinyNavbar } from "shiny-navbar";
import 'shiny-navbar/dist/shiny-navbar.css';

const App = () => {
  const config: NavbarItem[] = [
    {
      label: 'Main',
    },
    {
      label: 'Photos',
    },
    {
      label: 'About',
    },
    {
      label: 'Guestbook',
    }
  ]
  
  return <div>
    <ShinyNavbar items={config} />
  </div>
}
```