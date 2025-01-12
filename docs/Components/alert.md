---
sidebar_position: 1
---

# Alert

The Alert component is a versatile and customizable notification element that can be used to display various types of messages to users. It supports different alert types (info, success, warning, error) and includes built-in icons and optional close functionality.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'info' \| 'success' \| 'warning' \| 'error'` | Required | Determines the style and icon of the alert. |
| message | `string` | Required | The text content of the alert. |
| className | `string` | `''` | Additional CSS classes to apply to the alert container. |
| onClose | `() => void` | `undefined` | Optional callback function to handle alert dismissal. If provided, a close button will be displayed. |

## Import

```jsx
import {Alert} from '@brightcodeui/beta-ui';
```

## Basic Usage

Here's a simple example of how to use the Alert component:

import {Alert} from '@brightcodeui/beta-ui';

<Alert type="info" message="This is an informational alert." />

##
```jsx
import React from 'react';
import {Alert} from '@brightcodeui/beta-ui';


function MyComponent() {
  return (
    <Alert type="info" message="This is an informational alert." />
  );
}
```



## Examples

### Different Alert Types

You can create alerts with different types:

<div className="myAlert">
    <Alert type="info" message="This is an informational alert." />
    <Alert type="success" message="Operation completed successfully!" />
    <Alert type="warning" message="Warning: This action cannot be undone." />
    <Alert type="error" message="An error occurred. Please try again." />
</div>

```jsx
import React from 'react';
import Alert from '@brightcodeui/beta-ui';

function AlertExamples() {
  return (
    <div className="space-y-4">
      <Alert type="info" message="This is an informational alert." />
      <Alert type="success" message="Operation completed successfully!" />
      <Alert type="warning" message="Warning: This action cannot be undone." />
      <Alert type="error" message="An error occurred. Please try again." />
    </div>
  );
}
```

### Custom Styling

You can add custom classes to modify the appearance of the Alert:

<div className="myAlert">
    <Alert
        type="info"
        message="This alert has custom styling."
        className="border-2 border-blue-500 shadow-lg"
    />
</div>

```jsx
import React from 'react';
import Alert from '@brightcodeui/beta-ui';

function CustomStyledAlert() {
  return (
    <Alert
      type="info"
      message="This alert has custom styling."
      className="border-2 border-blue-500 shadow-lg"
    />
  );
}
```

### Closable Alert

To make an alert closable, provide an `onClose` function:

<div className="myAlert">
    <Alert
        type="success"
        message="This alert can be closed."
        onClose={()=>{console.log("")}}
    />
</div>

```jsx
import React from 'react';
import Alert from '@brightcodeui/beta-ui';

function ClosableAlert() {
  const handleClose = () => {
    console.log('Alert closed');
  };

  return (
    <Alert
      type="success"
      message="This alert can be closed."
      onClose={handleClose}
    />
  );
}
```

## Customization

The Alert component uses Tailwind CSS classes for styling. You can customize its appearance by modifying the `baseClasses` and `typeClasses` in the component file, or by passing custom classes through the `className` prop.