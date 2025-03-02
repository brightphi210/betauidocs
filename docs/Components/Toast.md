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
```

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
