# Web Development Training Diary - TR-102

## Date: June 27, 2024

### Exploring React.js

Welcome back to our web development journey! Today, we'll dive deeper into React.js and explore its core concepts. If you missed yesterday's introduction, feel free to review it in the previous section.

#### Key Concepts

1. **Components:**
   - React revolves around components. Think of them as building blocks for your UI.
   - Components can be functional (using functions) or class-based (using classes).
   - Create reusable components to keep your code organized and maintainable.

2. **JSX (JavaScript XML):**
   - JSX allows you to write HTML-like syntax within your JavaScript code.
   - It's a powerful way to create dynamic UI elements.
   - Example:
     ```jsx
     const greeting = <h1>Hello, React!</h1>;
     ```

3. **State and Props:**
   - State represents the internal data of a component.
   - Props (short for properties) are passed from parent to child components.
   - Managing state and props is crucial for building interactive apps.

4. **React Hooks:**
   - Introduced in React 16.8, hooks allow you to use state and other React features in functional components.
   - Common hooks include `useState`, `useEffect`, and `useContext`.

#### Getting Started

1. **Create a New React App:**
   - If you haven't already, create a new React app using:
     ```
     npx create-react-app my-react-app
     ```
   - Replace `my-react-app` with your preferred project name.

2. **Explore the Project Structure:**
   - Inside your project folder, you'll find files like `src/index.js`, `src/App.js`, and `public/index.html`.
   - `index.js` is the entry point, and `App.js` is where you'll build your components.

3. **Run the Development Server:**
   - Navigate to your project folder:
     ```
     cd my-react-app
     ```
   - Start the development server:
     ```
     npm start
     ```
   - Open your browser and visit `http://localhost:3000`.

