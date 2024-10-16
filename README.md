
# Project Name

This project is a React application built with TypeScript, Tailwind CSS, and React Router. It features a simple user interface that fetches and displays user information from a public API using a reusable custom hook (`useFetch`).

## Table of Contents
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Custom Hooks](#custom-hooks)
- [Types](#types)
- [Components](#components)
- [Pages](#pages)
- [Routing](#routing)

## Folder Structure

The `src` directory is structured as follows:

```
src
│
├── components   // Reusable UI components used across the app
│   ├── UserInfo.tsx
│   ├── UserList.tsx
│   └── ...
│
├── hooks        // Custom hooks for handling common logic
│   └── useFetch.ts
│
├── pages        // Pages rendered by the router
│   ├── UserDetails.tsx
│   ├── Users.tsx
│   └── ...
│
├── types        // TypeScript types for type safety
│   └── user.ts
│
├── App.tsx      // Main component where routes are defined
├── index.tsx    // Entry point of the application
└── index.css    // Main CSS file where Tailwind is imported
```

### Explanation of Directories

- **`components/`**: Contains reusable components that handle UI logic. Components like `UserList` and `UserInfo` are responsible for displaying lists of users and detailed user information, respectively. This makes the UI modular and easier to manage.
  
- **`hooks/`**: Contains custom hooks, such as `useFetch`, which encapsulates the logic for data fetching. The `useFetch` hook handles API calls, manages loading and error states, and returns data in a reusable way. This allows components to focus solely on rendering the UI, making the logic cleaner and more reusable.

- **`pages/`**: Contains page components that correspond to different routes in the application. For example, `Users.tsx` renders the list of users, while `UserDetails.tsx` displays detailed information about a single user. Each page typically uses components from the `components` directory for displaying specific sections of the UI.

- **`types/`**: Contains TypeScript interfaces that define the shape of the data used across the application. For instance, `user.ts` defines the structure of user data received from the API. Using TypeScript types helps ensure that the data used in the app conforms to expected structures, reducing runtime errors and improving code readability.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static type definitions.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: A library for managing client-side routing in React.
- **JSONPlaceholder**: A free online REST API used for testing and prototyping.

## Setup and Installation

To get the project running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Custom Hooks

### `useFetch`
- **Purpose**: The `useFetch` hook abstracts the logic for making API requests and managing loading and error states.
- **Benefits**:
  - **Reusability**: Instead of writing the same fetching logic in multiple components, `useFetch` allows you to reuse this logic across different parts of the app.
  - **Separation of Concerns**: The hook handles data fetching, allowing components to focus solely on rendering UI based on the fetched data.
- **Usage**:
  ```typescript
  const { data, loading, error } = useFetch<User[]>('/users');
  ```

## Types

- **Purpose**: To define the structure of data used throughout the application. This includes defining what properties are available in user objects.
- **Examples**:
  - `User` interface represents a simplified version of user data, including `id`, `name`, and `email`.
  - `UserDetails` interface provides a detailed structure, including properties like `address` and `company`.
- **Benefit**: By using TypeScript interfaces, we can catch potential bugs during development and ensure that data structures remain consistent.

## Components

- **Reusable Components**: The `components` folder contains components that can be used across multiple pages, making it easier to maintain the UI.
  - **`UserList`**: Displays a list of users, showing their names and email addresses.
  - **`UserInfo`**: Shows detailed information about a specific user, such as address and company details.
- **Modular Design**: Separating UI components makes the application easier to manage and test. Each component has a single responsibility, following best practices.

## Pages

- **Purpose**: The `pages` folder contains components that correspond to different routes of the application.
  - **`Users`**: Displays a list of users by fetching data from the API and using the `UserList` component to render it.
  - **`UserDetails`**: Displays detailed information for a specific user by fetching data from the API and using the `UserInfo` component for rendering.
- **Router Integration**: Each page corresponds to a route in the `App.tsx` file, which manages navigation between these pages.

## Routing

- **`App.tsx`**: The main component where the application's routes are defined using `react-router-dom`.
- **Example Routes**:
  - `/`: Renders the `Users` page, showing a list of users.
  - `/user/:userId`: Renders the `UserDetails` page, showing detailed information for the selected user.
- **Routing Structure**:
  - The `BrowserRouter` is wrapped around the `App` component in `index.tsx` to enable client-side routing.
  - Each route is defined as a child of the `App` component, making it easy to manage and navigate between different parts of the app.
