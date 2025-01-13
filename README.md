# Dynamite Goaltending Website

This is a responsive website built with **React**, **Bootstrap**, and **React Router** for Dynamite Goaltending. The project includes a dynamic navigation bar, responsive design, and custom components like dynamic links and a styled logo.

### For Developers
**Please use .tsx and not .jsx for React components. This project uses TypeScript for type safety and better code quality.**

---

## Features

- **Responsive Layout**:
  - Collapsible menu for smaller screens using Bootstrap's navbar components.
  - Dynamic links generated from a configuration file.
  - Custom hover effects on links.
  
- **Custom Styling**:
  - Styled with Bootstrap's utility classes and additional custom CSS for fine-tuning.
  - Custom color schemes for navbar, toggler button, and links.

- **Dynamic Routing**:
  - Built with React Router to handle page navigation.

---

## Tech Stack

- **React**: Component-based front-end library.
- **Bootstrap**: Responsive design framework.
- **React Router**: For navigation and dynamic routing.
- **CSS**: Custom styles for additional customization.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/breader1/dynamite-goaltending-website.git
   cd dynamite-goaltending-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:xxxx`.

---

## Project Structure

```
src/
├── assets/                # Images and other static assets
│   └── images/
│       └── dynamite.png   # Logo for the navbar
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navbar component
│   ├── SingleLink.tsx     # SingleLink component for dynamic links
├── models/                # TypeScript interfaces
│   └── LinkModel.ts       # Link interface definition
├── pages/                 # React components for individual pages
│   ├── About.tsx          # About page
│   └── Programs.tsx       # Programs page
├── styles.css             # Custom styles
└── App.tsx                # Main app component
```
Will update as files are added/removed/modified.