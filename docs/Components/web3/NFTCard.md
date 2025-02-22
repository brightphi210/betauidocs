---
sidebar_position: 1
sidebar_label: NFT Card
---

# NFTCard

The `NFTCard` component is a versatile, responsive card designed to display NFT (Non-Fungible Token) details in your React application. This component supports light and dark themes, includes a like button, and allows users to trigger a buy action.

## 🛠️ Installation

Ensure you have the necessary packages installed:

```bash
  npm i @brightcodeui/beta-ui
```

Or with Yarn:

```bash
yarn add @brightcodeui/beta-ui
```

## 🧩 Component Props

| Prop           | Type                   | Required | Default   | Description                                         |
|----------------|-----------------------|----------|-----------|-----------------------------------------------------|
| `imageSrc`     | `string`               | ✅        | `"/placeholder.svg"` | The image URL for the NFT.                           |
| `title`        | `string`               | ✅        | `""`      | The title of the NFT.                                |
| `creator`      | `string`               | ✅        | `""`      | The name of the NFT creator.                         |
| `price`        | `string`               | ✅        | `""`      | The current price of the NFT.                        |
| `likes`        | `number`               | 🚫        | `0`       | The number of likes the NFT has received.            |
| `onBuyClick`   | `() => void`           | 🚫        | `undefined` | Callback function triggered on Buy button click.     |
| `className`    | `string`               | 🚫        | `""`      | Additional CSS classes to customize the component.   |
| `theme`        | `'light'  'dark'`     | 🚫        | `'light'` | Determines the color theme of the component.         |

## 🛠️ Usage Example


import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState } from "react";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {NFTCard} from '@brightcodeui/beta-ui';



<Tabs>
  <TabItem value="code" label="Code" default>
        ```tsx
            import {NFTCard} from '@brightcodeui/beta-ui';

            const App = () => {
                const handleBuyClick = () => {
                    alert("NFT purchased!");
                };

                return (
                    <div className="p-4">
                    <NFTCard
                        imageSrc="https://res.cloudinary.com/dphb7gqus/image/upload/v1740226820/xsVxjlsDUE8ZjYAxGXPI--0--v98nx_hlam6z.jpg"
                        title="Cosmic Perspective #42"
                        creator="ArtisticMind"
                        price="0.5 ETH"
                        likes={23}
                        theme="light"
                        onBuyClick={handleBuyClick}
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
          const handleBuyClick = () => {
                alert("NFT purchased!");
            };

            return (
                <div className="p-4">
                    <NFTCard
                        imageSrc="https://res.cloudinary.com/dphb7gqus/image/upload/v1740226821/Oh6V69milpY3lQJboxJ6--0--rzahe_fsepsi.jpg"
                        title="Cosmic Perspective #42"
                        creator="ArtisticMind"
                        price="0.5 ETH"
                        likes={23}
                        theme="light"
                        onBuyClick={handleBuyClick}
                    />
                    
                </div>
            );
        };

        return <App />;
      }}
    </BrowserOnly>
  </TabItem>
</Tabs>



## 🎨 Theming

The `theme` prop allows you to switch between light and dark modes:

- **Light Theme (Default)**: `bg-white`, `text-gray-800`
- **Dark Theme**: `bg-gray-800`, `text-white`

Example usage for dark mode:

```tsx
<NFTCard
  imageSrc="https://example.com/nft-dark.jpg"
  title="Neon Nights"
  creator="CyberArtist"
  price="1.2 ETH"
  likes={42}
  theme="dark"
/>
```

## 📚 Storybook Integration

Easily preview and test the component using Storybook:

```tsx
export const DarkMode: Story = {
  args: {
    imageSrc: "https://res.cloudinary.com/dphb7gqus/image/upload/v1740226821/Oh6V69milpY3lQJboxJ6--0--rzahe_fsepsi.jpg",
    title: "Neon Nights",
    creator: "CyberArtist",
    price: "1.2 ETH",
    likes: 42,
    theme: "dark",
  },
};
```

Run Storybook to test your component:

```bash
npm run storybook
```

## 🚀 Conclusion

The `NFTCard` component is designed to be flexible and easy to use, making it ideal for showcasing NFTs in your app. You can customize the theme, handle buy actions, and display useful metadata, all within a clean, responsive UI.

Happy coding! 🚀
