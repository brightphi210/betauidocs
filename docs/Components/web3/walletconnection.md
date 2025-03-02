---
sidebar_position: 4
sidebar_label: Wallet Connection
---

## WalletConnection

The `WalletConnection` component provides a modal for users to connect their cryptocurrency wallets using MetaMask, WalletConnect, or Coinbase Wallet. It supports theme customization and displays the connected wallet address.

### Installation

Ensure you have the necessary dependencies installed:

```bash
  npm i @brightcodeui/beta-ui
```

### Usage

#### Basic Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {WalletConnection, Button} from  "@brightcodeui/beta-ui";
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState } from "react";


<Tabs>
  <TabItem value="ui" label="Example" default>
    <BrowserOnly>
      {() => {
        const App = () => {
          const [isOpen, setIsOpen] = useState(false);
          
          return (
            <div >
              <Button onClick={() => setIsOpen(true)} color="green" fontWeight="bold"  size="sm">Open Wallet Modal</Button>
                <WalletConnection
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  onConnect={""}
                  onDisconnect={""}
                  theme="light"
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
          <Button onClick={() => setIsOpen(true)} color="blue" fontWeight="bold"  size="sm">Open Wallet Modal</Button>
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
  </TabItem>

</Tabs>


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
