---
title: WalletConnection
sidebar_label: WalletConnection
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## WalletConnection

The `WalletConnection` component provides a modal for users to connect their cryptocurrency wallets using MetaMask, WalletConnect, or Coinbase Wallet. It supports theme customization and displays the connected wallet address.

### Installation

Ensure you have the necessary dependencies installed:

```bash
npm install framer-motion lucide-react
```

### Usage

#### Basic Example

```tsx
import React, { useState } from "react";
import {WalletConnection} from  "@brightcodeui/beta-ui";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConnect = async (walletType: string) => {
    // Simulate wallet connection
    return "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
  };

  const handleDisconnect = () => {
    console.log("Wallet disconnected");
  };

  return (
    <div className="p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Wallet Modal
      </button>
      <WalletConnection
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        theme="light"
      />
    </div>
  );
};

export default App;
```

### Props

| Prop           | Type                        | Description                                         |
|--------------|-----------------|-----------------------------------------------------|
| `isOpen`     | `boolean`                  | Controls the visibility of the modal.             |
| `onClose`    | `() => void`                | Callback function to close the modal.             |
| `onConnect`  | `(walletType: string) => Promise<string>` | Function to handle wallet connection. Returns wallet address. |
| `onDisconnect` | `() => void`               | Function to disconnect the wallet.                |
| `theme`      | `"light" | "dark"`          | Defines the theme of the modal. Default: `light`. |
| `accentColor` | `string`                   | Defines the accent color of the modal. Optional.  |

### Theming

You can switch between `light` and `dark` themes by setting the `theme` prop:

```tsx
    <WalletConnection 
        isOpen={isOpen} 
        onClose={onClose} 
        onConnect={onConnect} 
        onDisconnect={onDisconnect} 
        theme="dark" 
    />
```

### Custom Accent Color

You can pass a custom accent color to style the modal:

```tsx
    <WalletConnection 
        isOpen={isOpen} 
        onClose={onClose} 
        onConnect={onConnect} 
        onDisconnect={onDisconnect} 
        accentColor="purple" 
    />
```

### Error Handling

If the connection fails, an error message is displayed. You can simulate a failed connection like this:

```tsx
    const handleConnect = async () => {
    throw new Error("Failed to connect wallet.");
    };
```

Now you can integrate `WalletConnection` into your Frontend Project applications to provide a seamless wallet connection experience!
