# Setting up Tailwind CSS in a React + Vite + TypeScript Project

This guide walks you through the steps to initialize Tailwind CSS in a React project using Vite and TypeScript.

## Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm or Yarn package manager
- Vite installed globally (optional but recommended)

## Steps to Initialize Tailwind CSS

### 1. Create a Vite React Project with TypeScript

Run the following command to create a new project:

```bash
npm create vite@latest 
```

### 2. Install Tailwind CSS

Install Tailwind CSS along with its peer dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Initialize Tailwind CSS configuration:

```bash
npx tailwindcss init
```

This creates a `tailwind.config.js` file in the root of your project.

### 3. Configure Tailwind CSS

Update `tailwind.config.js` to include your template paths:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Add Tailwind Directives to Your CSS

Create a new CSS file (e.g., `src/index.css`) and include the following Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Import CSS in Your Application

Import the newly created CSS file in your `src/main.tsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Optional: Enable JIT Mode for Faster Development

Tailwind CSS includes a Just-In-Time (JIT) mode for faster build times and smaller bundle sizes. By default, JIT mode is enabled in Tailwind CSS 3.x.

If you'd like to ensure JIT mode is enabled, verify your `tailwind.config.js` contains:

```js
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
