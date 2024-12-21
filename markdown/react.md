---
title: Everything you need to know about React 19 RC
description: "React 19 is now in RC stage. In this post, I cover all the major updates of React 19, and what it means for app developers"
date: September 5, 2024
tags: React
featuredImage: https://res.cloudinary.com/dubc3wnbv/image/upload/v1725664722/Final_gxm9ne.png
---

React 19 is currently in Release Candidate (RC), which means it’s ready for library authors but not quite there for application developers. If you’re developing applications, upgrading to React 18.3 will help you prepare for React 19. The React 19 update introduces new features such as Actions, new Hooks, and new APIs. It also removes the need for hooks such as `useMemo` and `useCallback` with the help of the React Compiler, available as a plugin. In this post, we will explore the updates in React 19.

## Actions

Actions make it easier to handle form submissions, read data from a form submission, and show loading states. Actions are asynchronous functions that handle mutations. If you are familiar with PHP or Remix, React Actions will feel familiar. Instead of using the `onClick` event handlers to submit a form, React now allows you to specify an action for a form using:

```html
<form action="{actionFn}">...</form>
```

With this, you no longer need to `handleSubmit` a form. The form changes like so:

```jsx
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      Update
    </button>
  );
}

return (
  <form action={formAction}>
    <input type="text" name="name" />
    <SubmitButton />
  </form>
);
```

As you notice here, the form no longer needs to submit the data through the `handleSubmit` event handler.

React Actions work on both the client and server sides.

I wrote a detailed blog post on converting a React 18 form to a React 19 form. [Check it out here.](https://shrutikapoor.dev/posts/React-React19Actions), or watch the video

<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/ExZUdkfu-KE?si=81aRW0gTCJwr3uFW"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## React Compiler: No More `useMemo` and `useCallback`

One of the most exciting updates announced at React Conf 2024 was the introduction of the React Compiler, which introduces auto-memoization, removing the need for `useMemo` and `useCallback`. This means no more manually optimizing code by adding these hooks around functions and components. React Compiler automatically identifies slow components and optimizes their performance by reducing unnecessary re-renders. React Compiler is [available as plugin.](https://react.dev/learn/react-compiler#installation)

**Key Optimizations by React Compiler:**

- **Skipping Rendering of Children:** When a parent component updates, only the affected children re-render, preventing unnecessary updates.
- **Skipping Expensive Calculations:** React Compiler uses JavaScript rules and React’s internal logic to skip unnecessary expensive calculations.

To see which parts of your code are optimized, you can use the React Compiler Playground, which visually indicates optimized code.

![React Compiler](https://res.cloudinary.com/dubc3wnbv/image/upload/v1725664765/Compiler-playground_dinw0f.png)
\_This image shows what the compiled code looks like. On the left is the component, and on the right is what the React compiler generates.\*

I will write a detailed blog post on React Compiler. Stay tuned!

## New Hooks: `useFormStatus`, `useActionState`, and `useOptimistic`

React 19 introduces new hooks that provide enhanced control over form management and state updates, making it easier to handle complex form interactions and data.

1. **`useFormStatus`**: `useFormStatus` provides information about the last form submission. It returns an object containing properties - `pending`, `data`, and `action`, which help track the status of a form submission process. This hook is particularly useful for managing the UI state based on form actions, such as displaying loading indicators, success messages, or handling errors. This hook should be used within a form’s child component.

   - **Parameters:**
     - `pending`: Indicates if the form submission is currently in progress.
     - `data`: The data submitted in the last form action.
     - `action`: Information about the action associated with the form submission.

   ```jsx
   import { useFormStatus } from "react";

   function SubmitButton() {
     const { pending } = useFormStatus();

     return (
       <button type="submit" disabled={pending}>
         {pending ? "Submitting..." : "Submit"}
       </button>
     );
   }
   ```

2. **`useActionState`**: `useActionState` accepts an existing action and initial state, returning a new action and state which can be used in the form. It allows you to update the state based on an action. This hook can be really useful when you need the latest state updates after a form submission.

   ```jsx
   import { useActionState } from "react";

   async function increment(previousState, formData) {
     return previousState + 1;
   }

   function FormComponent() {
     const [state, formAction] = useActionState(increment, 0);
     return <form action={formAction}>{state}</form>;
   }
   ```

3. **`useOptimistic`**: `useOptimistic` is a great new hook for optimistic UI updates, a technique where the UI optimistically reflects a user's action before confirming the change with a response. This approach provides a much faster perceived user experience, making applications feel more responsive. `useOptimistic` is especially useful for scenarios where an application may want to show a state update while the form or data is still being submitted.

   ```jsx
   const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
   ```

## New API: `use`

Despite its hook-like appearance, `use` is actually an API that reads resources like contexts and promises. Unlike hooks, it doesn’t need to be placed at the top of a component and can be used conditionally.

```jsx
const theme = use(ThemeContext);

return <h1 style={{ color: theme.color }}>{children}</h1>;
```

`use` can also be used to read promises.

```jsx
function Comments({ commentsPromise }) {
  // use will suspend until the promise resolves.
  const comments = use(commentsPromise);

  return comments.map((comment) => <p key={comment.id}>{comment}</p>);
}
```

One caveat, though—`use` does not support promises created in render. If you try to pass a promise created in render to `use`, React will give a warning: `Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.`

## React Server Components

React Server Components are now stable in React 19. React Server Components (RSC) are special components that run on the server instead of in your browser. This setup allows React to handle data and rendering on the server, which can speed things up because less work is done on your device. They work together with regular components that run in the browser to provide a smooth and fast experience, especially for apps that need to show lots of data or make frequent updates. Essentially, they make apps feel quicker by offloading some heavy work to the server.

## What’s Changed in React 19?

1. **Refs as Props:**

   - Refs now work as props, eliminating the need for `forwardRef`. This change simplifies code and reduces errors related to passing refs between components.

2. **No More `useMemo` and `useCallback`:**

   - With the React Compiler, manual memorization is no longer necessary, making it easier to optimize your application’s performance.

3. **Error Handling Improvements:**

   - Improved error handling ensures no duplicate errors in the console and better context usage.

4. **Enhanced Metadata Management:**

   - React 19 allows metadata to be placed directly within components, enabling different metadata for different pages or components.

5. **Improved Stylesheet Support:**
   - React 19 offers better control over stylesheet precedence, allowing developers to prioritize styles easily.

### Conclusion

React 19 brings significant improvements in form handling, introduces new hooks, and new APIs. If you want to try out React 19 before its stable release, it is recommended to update your app to React 18.3 first. The overall theme of React 19 has been to remove the manual need for handling pending states, improving the form submission experience, and reducing the need for manual memoization through the compiler.

Stay tuned for more updates as React 19 moves closer to its final release!
