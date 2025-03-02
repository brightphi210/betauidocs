---
sidebar_position: 3
sidebar_label: Token swap
---

# TokenSwap

## Overview

The `TokenSwap` component is a flexible React component for swapping tokens. It supports dynamic token selection, real-time exchange rate calculation, balance tracking, and allows users to perform token swaps directly in the UI.

## Features
- Dynamic token selection
- Real-time balance display
- Exchange rate calculation
- Light and dark themes
- Swap button with validation
- Customizable via props

## Installation

```bash
  npm i @brightcodeui/beta-ui
```

## Props

| Prop            | Type                               | Description                                               | Required |
|-----------------|------------------------------------|-----------------------------------------------------------|----------|
| `tokens`        | `Token[]`                          | Array of token objects with symbol and balance properties. | ✅        |
| `exchangeRates` | `Record<string, number>`           | Object containing exchange rates as key-value pairs.       | ✅        |
| `onSwap`        | `(fromToken, toToken, amount) => void` | Callback function triggered when a swap occurs.            | 🚫        |
| `theme`         | `'light' | 'dark'`                 | Sets the component theme. Defaults to `light`.             | 🚫        |

### Token Object

```typescript
interface Token {
  symbol: string;
  balance: number;
}
```

## Example Usage

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { TokenSwap } from  "@brightcodeui/beta-ui";
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState } from "react";


<Tabs>
  <TabItem value="ui" label="Example" default>
    <BrowserOnly>
      {() => {
        const App = () => {

          const tokens = [
            { symbol: 'ETH', balance: 10 },
            { symbol: 'BTC', balance: 0.5 },
            { symbol: 'SOL', balance: 100 }
          ];

          const exchangeRates = {
            'ETH_BTC': 0.05,
            'BTC_ETH': 20,
            'ETH_SOL': 100,
            'SOL_ETH': 0.01,
          };

          const data = {
            fromToken: 'ETH',
            toToken: 'BTC',
            amount: '2000'
          }
          const handleSwap = () => {
            console.log(`Swapped ${data.amount} ${data.fromToken} to ${data.toToken}`);
          };


          return (
            <TokenSwap
              tokens={tokens}
              exchangeRates={exchangeRates}
              onSwap={handleSwap}
              theme="light"
            />
          );
        };
        return <App />;

      }}
    </BrowserOnly>
  </TabItem>

  <TabItem value="code" label="Code">
  ```tsx
    import { TokenSwap } from '@brightcodeui/beta-ui';

    const tokens = [
      { symbol: 'ETH', balance: 10 },
      { symbol: 'BTC', balance: 0.5 },
      { symbol: 'SOL', balance: 100 }
    ];

    const exchangeRates = {
      'ETH_BTC': 0.05,
      'BTC_ETH': 20,
      'ETH_SOL': 100,
      'SOL_ETH': 0.01,
    };



    const handleSwap = (fromToken: string, toToken: string, amount: number) => {
      console.log(`Swapped ${amount} ${fromToken} to ${toToken}`);
    };

    function App() {
      return (
        <TokenSwap
          tokens={tokens}
          exchangeRates={exchangeRates}
          onSwap={handleSwap}
          theme="light"
        />
      );
    }

    export default App;
    ```
  </TabItem>

</Tabs>


## UI Components

- **From Token Selector:** Allows users to choose the token they want to swap from.
- **To Token Selector:** Allows users to choose the token they want to swap to.
- **Amount Input:** Users enter the amount to swap.
- **Exchange Rate Display:** Shows the calculated amount of the target token.
- **Swap Button:** Triggers the swap if the amount is valid.

## Validation
- Swap is disabled if the amount is `0` or exceeds the available balance.

## Styling

- Tailwind CSS classes for responsiveness and dark/light mode.
- Icons for tokens (ETH, BTC, fallback icon).

## Events

### `onSwap`

Called when the user successfully swaps tokens.

```typescript
onSwap(fromToken: string, toToken: string, amount: number)
```

Example:

```typescript
const handleSwap = (fromToken, toToken, amount) => {
  console.log(`Swapped ${amount} ${fromToken} to ${toToken}`);
};
```

## Customization

- **Tokens:** Add or remove tokens by updating the `tokens` array.
- **Exchange Rates:** Update rates through the `exchangeRates` object.
- **Themes:** Switch between light and dark mode via the `theme` prop.

## Storybook Setup

Use Storybook to test the component in isolation.

```typescript
import TokenSwap from '../components/TokenSwap';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TokenSwap> = {
  title: 'Components/TokenSwap',
  component: TokenSwap,
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    onSwap: { action: 'swap clicked' },
  },
};

export default meta;

export const Default: StoryObj<typeof TokenSwap> = {
  args: {
    tokens: [
      { symbol: 'ETH', balance: 10 },
      { symbol: 'BTC', balance: 0.5 },
    ],
    exchangeRates: {
      'ETH_BTC': 0.05,
    },
    theme: 'light',
  },
};

export const DarkMode: StoryObj<typeof TokenSwap> = {
  args: {
    tokens: [
      { symbol: 'BTC', balance: 2 },
      { symbol: 'ETH', balance: 40 },
    ],
    exchangeRates: {
      'BTC_ETH': 20,
    },
    theme: 'dark',
  },
};
```

## Conclusion

The `TokenSwap` component is a robust and customizable solution for token exchange interfaces. It’s perfect for crypto apps, DeFi platforms, or educational projects. Extend it to include more tokens, fetch live exchange rates, or connect to blockchain networks!

Ready to build something amazing? Let me know if you want any adjustments! 🚀

