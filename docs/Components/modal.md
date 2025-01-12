---
title: Modal Component Documentation
sidebar_label: Modal
description: Documentation for the Modal component built with React, Framer Motion, and React Icons.
---

# Modal Component

The `Modal` component is a reusable, accessible, and animated modal dialog for React applications. 
It leverages libraries like [Framer Motion](https://www.framer.com/motion/) for animations and 
[React Icons](https://react-icons.github.io/react-icons/) for icons.

## Features

- Smooth animations for modal appearance and dismissal.
- Click outside to close functionality.
- Locks background scroll when the modal is open.
- Customizable styles via props.

---

## Installation

To use the `Modal` component, ensure you have the required dependencies installed:

```bash
npm install @brightcodeui/beta-ui
```

---

## Props

| Name       | Type            | Default | Description                                      |
|------------|-----------------|---------|--------------------------------------------------|
| `isOpen`   | `boolean`       | -       | Controls whether the modal is visible.          |
| `onClose`  | `() => void`    | -       | Function to call when the modal is closed.      |
| `title`    | `string`        | -       | Title of the modal.                             |
| `children` | `React.ReactNode` | -     | Content to display inside the modal.           |
| `className`| `string`        | `''`    | Additional custom styles for the modal.         |

---

## Usage

Here is an example of how to use the `Modal` component:

import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Modal, Button } from '@brightcodeui/beta-ui';

<BrowserOnly>
  {() => {
    const App = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      return (
        <div >
            <div className="myAlerta">
                <Button color="green" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            </div>

            <div className="">
            
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="My Modal Title"
                    className="myModal"
                >
                    <p className="">This is the content inside the modal.</p>
                </Modal>
            </div>

        </div>
      );
    };

    return <App />;
  }}
</BrowserOnly>



```tsx
import React, { useState } from 'react';
import { Modal } from '@brightcodeui/beta-ui';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal Title"
      >
        <p>This is the content inside the modal.</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default App;
```

---

## Explanation of the Component

### Structure

The `Modal` component:
1. Renders using a React Portal to ensure it appears outside the app's regular DOM hierarchy.
2. Animates using `Framer Motion` for entry and exit effects.
3. Closes when clicking outside the modal or on the close button.

### Props Breakdown

- **`isOpen`**: Determines if the modal is visible.
- **`onClose`**: Callback to close the modal.
- **`title`**: Text displayed in the modal's header.
- **`children`**: Content rendered inside the modal.
- **`className`**: Allows additional customization by passing a class string.

### Styling

The modal includes responsive styling:
- A fixed width for various screen sizes using Tailwind classes.
- Flexbox for centering.

You can override styles using the `className` prop.

### Accessibility

- The modal locks scrolling when opened to improve usability.
- A close button is included, providing an alternative to clicking outside.

---

## Advanced Features

### Animation Customization

You can tweak animations by modifying the `motion.div` elements:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-black bg-opacity-50"
>
  ...
</motion.div>
```

### Handling Outside Clicks

The `useEffect` hook ensures clicking outside the modal closes it:

```tsx
useEffect(() => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (isOpen) {
    document.addEventListener('mousedown', handleOutsideClick);
  }

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, [isOpen, onClose]);
```

---

## Conclusion

The `Modal` component is a robust solution for adding modals to your React application. With customizable animations, styling, and responsive design, it ensures a smooth and user-friendly experience.
