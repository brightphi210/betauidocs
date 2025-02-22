---
sidebar_position: 2
sidebar_label: Successful Transaction Modal
---

## Overview

The `SuccessfulTransactionModal` component provides a visually appealing modal for displaying successful transaction messages. It supports both light and dark themes and includes an animated appearance using Framer Motion.

## Installation
 


```bash
  npm i @brightcodeui/beta-ui
```

import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState } from "react";
import {SuccessfulTransactionModal, Button} from "@brightcodeui/beta-ui";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



<Tabs>
  <TabItem value="code" label="Code" default>
    ```tsx
    import React, { useState } from "react";
    import {SuccessfulTransactionModal} from "@brightcodeui/beta-ui";

    const App = () => {
      const [isOpen, setIsOpen] = useState(false);
      const transactionHash = "0x1234567890abcdef";

      const handleTransaction = () => {
        setIsOpen(true);
        // Simulate transaction success
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      };

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
  </TabItem>
  <TabItem value="ui" label="Example">
    <BrowserOnly>
      {() => {
        const App = () => {
          const [isOpen, setIsOpen] = useState(false);
          const transactionHash = "0x1234567890abcdef";


          const handleOpen = () => {
            setIsOpen(true);
          };


          return (
            <div >
              <Button onClick={handleOpen} color="green" fontWeight="bold"  size="sm">View Success Modal</Button>
              <SuccessfulTransactionModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                transactionHash={transactionHash}
                theme="dark"
              />
            </div>
          );
        };

        return <App />;
      }}
    </BrowserOnly>
  </TabItem>
</Tabs>

## Props

| Prop Name       | Type      | Description                                        | Default Value |
|----------------|----------|----------------------------------------------------|---------------|
| `isOpen`       | `boolean` | Controls whether the modal is visible.            | `false`       |
| `onClose`      | `() => void` | Function to close the modal.                  | `-`           |
| `transactionHash` | `string` | The hash of the successful transaction.        | `-`           |
| `theme`        | `'light' | 'dark'` | Determines the modal's appearance. | `'light'`      |

## Usage


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
