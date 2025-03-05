---
title: Toast
description: A versatile and customizable toast notification component for React applications.
---

## Toast Component

The `Toast` component is a highly flexible notification system for React applications, allowing you to display different types of messages with customizable icons, themes, positions, and durations.

### Installation

Install the required dependencies:

```bash
npm install @brightcodeui/beta-ui
```

### Usage

Import the `Toast` component into your project:

```jsx
import {Toast} from '@brightcodeui/beta-ui'
```

Example usage:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {Toast, Button} from  "@brightcodeui/beta-ui";
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState } from "react";



<Tabs>
  <TabItem value="ui" label="Example" default>
    <BrowserOnly>
      {() => {
        const App = () => {
          const [isOpen, setIsOpen] = useState(false);
          const [isOpen1, setIsOpen1] = useState(false);
          const [isOpen2, setIsOpen2] = useState(false);
          const [isOpen3, setIsOpen3] = useState(false);
          const [isOpen4, setIsOpen4] = useState(false);
          const [isOpen5, setIsOpen5] = useState(false);
          
          return (
            <div>
              <div className="myBTNs">
                <Button onClick={() => setIsOpen(!isOpen)} color="green" fontWeight="bold"  size="sm">Success Toast</Button>
                <Button onClick={() => setIsOpen1(!isOpen1)} color="red" fontWeight="bold"  size="sm">Error Toast</Button>
                <Button onClick={() => setIsOpen2(!isOpen2)} color="blue" fontWeight="bold"  size="sm">Info Toast</Button>
                <Button onClick={() => setIsOpen3(!isOpen3)} color="yellow" fontWeight="bold"  size="sm">Warning Toast</Button>
                <Button onClick={() => setIsOpen4(!isOpen4)} color="black" fontWeight="bold"  size="sm">Custom</Button>
                <Button onClick={() => setIsOpen5(!isOpen5)} color="white" fontWeight="bold"  size="sm">Loading</Button>
              </div>

              <Toast 
                type="success"
                message="Your action was successful!"
                duration={3000}
                position="bottom-right"
                theme="light"
                isVisible={isOpen}
                onClose={() => console.log("Toast closed")}
                className="myToast"
              />

              <Toast 
                type="error"
                message="There was an error opening the toast"
                duration={3000}
                position="bottom-center"
                theme="light"
                isVisible={isOpen1}
                onClose={() => console.log("Toast closed")}
                className="myToast"
              />

              <Toast 
                type="info"
                message="This is an info message"
                duration={3000}
                position="top-center"
                theme="light"
                isVisible={isOpen2}
                onClose={() => console.log("Toast closed")}
                className="myToast"
              />

              <Toast 
                type="warning"
                message="This is an Warning message"
                duration={3000}
                position="top-center"
                theme="dark"
                isVisible={isOpen3}
                onClose={() => console.log("Toast closed")}
                className="myToast"
              />

              <Toast 
                type="custom"
                message="Your Rocket is ready to launch"
                duration={3000}
                position="top-left"
                theme="dark"
                isVisible={isOpen4}
                onClose={() => console.log("Toast closed")}
                className="myToast"
              />

              <Toast 
                type="loading"
                message="Processing your approval"
                duration={3000}
                position="top-right"
                theme="dark"
                isVisible={isOpen5}
                onClose={() => console.log("Toast closed")}
                className="myToast"
              />
            </div>
          );
        };

        return <App />;
      }}
    </BrowserOnly>
  </TabItem>

  <TabItem value="code" label="Code">
    ```tsx
      <Toast 
        type="success"
        message="Your action was successful!"
        duration={3000}
        position="top-right"
        theme="light"
        isVisible={true}
        onClose={() => console.log("Toast closed")}
      />

      <Toast 
        type="error"
        message="There was an error opening the toast"
        duration={3000}
        position="bottom-center"
        theme="light"
        isVisible={isOpen1}
        onClose={() => console.log("Toast closed")}
      />

      <Toast 
        type="info"
        message="This is an info message"
        duration={3000}
        position="top-center"
        theme="light"
        isVisible={isOpen2}
        onClose={() => console.log("Toast closed")}
      />

      <Toast 
        type="warning"
        message="This is an Warning message"
        duration={3000}
        position="top-center"
        theme="dark"
        isVisible={isOpen3}
        onClose={() => console.log("Toast closed")}
      />
    ```
  </TabItem>

</Tabs>

### Props

| Prop            | Type                                                                                     | Description                                                                                           | Default     |
|-----------------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|-------------|
| `type`          | `'success' | 'error' | 'warning' | 'info' | 'loading' | 'custom'`                      | Type of toast notification.                                                                             | -           |
| `message`       | `string`                                                                                 | Message to display in the toast.                                                                       | -           |
| `duration`      | `number`                                                                                 | Duration in milliseconds before toast auto-dismisses (0 for no auto-dismiss).                          | `3000`      |
| `theme`         | `'light' | 'dark'`                                                                       | Theme of the toast.                                                                                    | `'light'`   |
| `position`      | `'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'` | Position of the toast on the screen.                                                                    | `'top-right'`|
| `icon`          | `React.ReactNode`                                                                        | Custom icon to display (only used when type is `'custom'`).                                             | `null`      |
| `onClose`       | `() => void`                                                                             | Optional callback when toast is closed.                                                                | `undefined` |
| `className`     | `string`                                                                                 | Optional additional class names.                                                                       | `''`        |
| `isVisible`     | `boolean`                                                                                | Whether the toast is visible.                                                                           | `true`      |

### Features

- 🟢 **Success notifications**
- 🔴 **Error messages**
- ⚠️ **Warnings and alerts**
- ℹ️ **Info updates**
- 🔄 **Loading indicators**
- ✨ **Custom icons and messages**
- 🎯 **Precise positioning and responsive design**

### Animations

The component supports slide-in and slide-out animations:

- `slide-in-up`, `slide-in-down`, `slide-in-left`, `slide-in-right`
- `slide-out-up`, `slide-out-down`, `slide-out-left`, `slide-out-right`

### Progress Bar

For toasts with a duration, a progress bar is displayed, showing how much time remains before auto-dismissal.

### Styling

Styled with Tailwind CSS, making it easy to customize.

Example style for a success toast:

```css
.bg-green-600 {
  background-color: #16a34a;
}
```

### Custom Icons

You can pass any React node as a custom icon:

```typescript
<Toast 
  type="custom"
  message="Custom message with icon"
  icon={<FaRocket />}
/>
```

### Closing the Toast

You can manually dismiss the toast with the close button or trigger the `onClose` callback.

### Accessibility

The toast component supports ARIA attributes for better accessibility.

---

With this component, you have a powerful tool for handling notifications in your React app. 🎉

Need more customization? Let me know! 🚀
