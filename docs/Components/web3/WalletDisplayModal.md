# Wallet Display Modal

## Overview
The `WalletModal` component is a modal window that displays a user's wallet details, including their address, balance, and an avatar. It provides functionalities such as copying the wallet address and disconnecting the wallet. The component also features smooth animations for opening and closing.

## Props

| Prop Name       | Type       | Description                                                                 | Default |
|---------------|------------|-----------------------------------------------------------------------------|---------|
| `isOpen`      | `boolean`  | Determines if the modal is open.                                           | `false` |
| `onClose`     | `() => void` | Function to close the modal.                                               | -       |
| `address`     | `string`   | The wallet address of the user.                                            | -       |
| `balance`     | `string`   | The balance of the user's wallet.                                          | -       |
| `currency`    | `string`   | The currency unit of the balance (e.g., ETH, BTC).                         | -       |
| `onCopy`      | `() => void` | Callback function triggered when the address is copied.                    | -       |
| `onDisconnect` | `() => void` | Callback function triggered when the user disconnects the wallet.          | -       |
| `className`   | `string`   | Additional class names for custom styling.                                 | `""`    |
| `avatarUrl`   | `string`   | URL of the user's wallet avatar.                                           | `""`    |

## Features
- **Displays Wallet Details**: Shows the wallet address, balance, and currency.
- **Copy Wallet Address**: Users can copy their wallet address with a single click.
- **Disconnect Wallet**: Allows users to disconnect their wallet from the application.
- **Smooth Animations**: Modal appears and disappears with transition effects.

## Installation
```bash
    npm install @brightcodeui/beta-ui
```

## Basic Example


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {WalletDisplayModal, Button} from  "@brightcodeui/beta-ui";
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState } from "react";


<Tabs>
  <TabItem value="ui" label="Example" default>
    <BrowserOnly>
      {() => {
        const App = () => {
          const [isModalOpen, setModalOpen] = useState(false);
          
          return (
            <div>
                <Button color="blue" onClick={() => setModalOpen(true)}>Open Wallet</Button>
                <WalletDisplayModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    address="0x123...abcd"
                    balance='0.500'
                    currency='Eth'
                    avatarUrl="https://res.cloudinary.com/dphb7gqus/image/upload/v1707762135/media/profile_pics/a1_k3kjtp.jpg"
                    onDisconnect={() => alert('Its Disconnected')}
                    onCopy={()=>alert('Its Copy')}
                    className="myP"
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
    import React, { useState } from "react";
    import {WalletConnection} from  "@brightcodeui/beta-ui";

    const App = () => {
      const [isModalOpen, setModalOpen] = useState(false);

      return (
        <div className="p-8">
          <Button onClick={() => setIsOpen(true)} color="blue" fontWeight="bold"  size="sm">Open Wallet Modal</Button>
          <WalletConnection
            isOpen={isOpen}
            address="0x123...abcd"
            onClose={() => setIsOpen(false)}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
            theme="light"
            avatarUrl="https://res.cloudinary.com/dphb7gqus/image/upload/v1707762135/media/profile_pics/a1_k3kjtp.jpg"
          />
        </div>
      );
    };

    export default App;
    ```
  </TabItem>

</Tabs>


## Methods & Event Handlers
- `onClose() ` :  Closes the modal.
- `onCopy() ` :  Copies the wallet address to the clipboard.
- `onDisconnect() ` :  Handles wallet disconnection.


## Notes
- The component uses Tailwind CSS for styling.
- Ensure that the parent component manages the `isOpen` state properly.
- Wallet address formatting is handled internally to improve readability.

