// History Stack
// The history stack is a data structure used by web browsers to keep track of the pages that a user has visited during their browsing session. It operates much like a stack in computer science, which follows a Last-In-First-Out (LIFO) order. Each time a user navigates to a new page, an entry is pushed onto the history stack. When the user navigates back (usually by clicking the back button), the most recent entry is popped off the stack, and the browser displays the previous page.

// Current Entry
// The current entry refers to the active page in the history stack that the user is currently viewing. When you navigate to a new page, the current entry is updated to this new page, and it is pushed onto the stack. Conversely, when you navigate back, the current entry is set to the previous entry in the stack.

// How These Concepts Apply to React Router
// React Router uses the browser's history API to manipulate the history stack and manage navigation. The useNavigate hook and components like Link provide abstractions for interacting with the history stack.

// Push vs. Replace: Navigating to a new route usually pushes a new entry onto the stack, while replacing updates the current entry without adding a new one.

// Manipulating the History Stack with useNavigate
// Here's how you can use useNavigate to interact with the history stack in a React Router application:

navigate("/new-page"); // This action pushes a new entry onto the history stack.

navigate("/new-page", { replace: true }); // his action replaces the current entry with a new one, without adding a new entry to the history stack.

navigate(-1); // these actions allow you to navigate back and forward in the history stack.
