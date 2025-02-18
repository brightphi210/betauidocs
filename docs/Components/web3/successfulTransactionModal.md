---
title: SuccessfulTransactionModal
sidebar_label: SuccessfulTransactionModal
description: A modal component for displaying successful transaction messages.
---

## Overview

The `SuccessfulTransactionModal` component provides a visually appealing modal for displaying successful transaction messages. It supports both light and dark themes and includes an animated appearance using Framer Motion.

## Installation

Ensure you have the required dependencies installed:

```sh
npm install framer-motion lucide-react

```

## Props

| Prop Name       | Type      | Description                                        | Default Value |
|----------------|----------|----------------------------------------------------|---------------|
| `isOpen`       | `boolean` | Controls whether the modal is visible.            | `false`       |
| `onClose`      | `() => void` | Function to close the modal.                  | `-`           |
| `transactionHash` | `string` | The hash of the successful transaction.        | `-`           |
| `theme`        | `'light' | 'dark'` | Determines the modal's appearance. | `'light'`      |

## Usage

Import and use the component in your React app:

```tsx
import React, { useState } from "react";
import {SuccessfulTransactionModal} from "@brightcodeui/beta-ui";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const transactionHash = "0x1234567890abcdef";#

  const handleTransaction = () => {
    setIsOpen(true);
    // Simulate transaction success
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };
  }

  return (
    <div>
      <SuccessfulTransactionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        transactionHash={transactionHash}
        theme="dark"
      />
    </div>
  );
};

export default App;
```

## Theming

The `theme` prop allows you to switch between light and dark themes:

- **Light Theme (Default)**
  ```tsx
      <SuccessfulTransactionModal 
        isOpen={true} 
        transactionHash="0x1234567890abcdef" 
        theme="light" onClose={() => {}} 
      />
  ```

- **Dark Theme**
  ```tsx
    <SuccessfulTransactionModal 
      isOpen={true} 
      transactionHash="0x1234567890abcdef" 
      theme="dark" onClose={() => {}} 
    />
  ```

## Example with Storybook

This component is also available in Storybook with different configurations:

```tsx
export const Default: Story = {
  args: {
    isOpen: true,
    transactionHash: "0x1234567890abcdef",
    theme: "light",
  },
};

export const DarkMode: Story = {
  args: {
    ...Default.args,
    theme: "dark",
  },
};
```

## Conclusion

The `SuccessfulTransactionModal` 
component is an elegant and reusable solution for displaying 
transaction confirmations. It integrates smoothly into any 
React project and supports customizable themes.
