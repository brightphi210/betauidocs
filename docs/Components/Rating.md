# Rating

The Rating component provides an interactive star rating system that allows users to view or select a rating value. It's highly customizable with different sizes, colors, and can be set to read-only mode.

## Import

```tsx
import Rating from "@brightcodeui/beta-ui";
```

## Props

| Prop | Type | Default | Description
|-----|-----|-----|-----
| `value` | `number` | `0` | The current rating value
| `max` | `number` | `5` | The maximum rating value (number of stars)
| `readOnly` | `boolean` | `false` | If `true`, the rating cannot be changed
| `size` | `"sm" | "md" | "lg"` | `"md"` | The size of the rating stars
| `color` | `"default" | "primary" | "secondary" | "success" | "warning" | "danger"` | `"default"` | The color theme of the rating stars
| `onChange` | `(value: number) => void` | `undefined` | Callback function called when the rating changes
| `className` | `string` | `undefined` | Additional CSS class names


### Basic Usage

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {Rating} from  "@brightcodeui/beta-ui";
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState } from "react";

<Tabs>

    <TabItem value="ui" label="Example" default>

        <BrowserOnly>
        {() => {
            const App = () => {
                const [value, setValue] = useState(3);
                
                return (
                    <div>
                        <Rating 
                            value={value} 
                            onChange={()=>setValue(5)} 
                            size="lg"
                        />
                    </div>
                );
            };

        return <App />;
      }}
    </BrowserOnly>
    </TabItem>

    <TabItem value="code" label="code" >
        ```tsx
            import { Rating } from "@brightcodeui/beta-ui";

            export function BasicRating() {
                const [value, setValue] = React.useState(3);
                
                return (
                    <Rating 
                        value={value} 
                        onChange={setValue} 
                        size="lg"
                    />
                );
            }
        ```
    </TabItem>
</Tabs>


### Different Colors


<Tabs>

    <TabItem value="ui" label="Example" default>

        <BrowserOnly>
        {() => {
            const App = () => {
                const [value, setValue] = useState(3);
                
                return (
                    <div>
                        <div className="flex flex-col gap-2">
                            <Rating value={3} color="default" />
                            <Rating value={3} color="primary" />
                            <Rating value={3} color="secondary" />
                            <Rating value={3} color="success" />
                            <Rating value={3} color="warning" />
                            <Rating value={3} color="danger" />
                        </div>
                    </div>
                );
            };

        return <App />;
      }}
    </BrowserOnly>
    </TabItem>

    <TabItem value="code" label="code" >
     ```tsx
            import { Rating } from "@brightcodeui/beta-ui";

            export function RatingColors() {
                return (
                    <div className="flex flex-col gap-2">
                        <Rating value={3} color="default" />
                        <Rating value={3} color="primary" />
                        <Rating value={3} color="secondary" />
                        <Rating value={3} color="success" />
                        <Rating value={3} color="warning" />
                        <Rating value={3} color="danger" />
                    </div>
                );
            }
        ```
    </TabItem>
</Tabs>




### Read-Only Rating


```tsx
import { Rating } from "@brightcodeui/beta-ui";

export function ReadOnlyRating() {
  return <Rating value={4} readOnly />;
}
```


### Custom Maximum

```tsx
import { Rating } from "@brightcodeui/beta-ui";

export function TenStarRating() {
  return <Rating value={7} max={10} />;
}
```

### Different Sizes

<Tabs>

    <TabItem value="ui" label="Example" default>

        <BrowserOnly>
        {() => {
            const App = () => {
                const [value, setValue] = useState(3);
                
                return (
                     <div className="flex flex-col gap-2">
                        <Rating value={3} size="sm" color="primary"/>
                        <Rating value={3} size="md" color="primary"/>
                        <Rating value={3} size="lg" color="primary"/>
                    </div>
                );
            };

        return <App />;
      }}
    </BrowserOnly>
    </TabItem>

    <TabItem value="code" label="code" >
        ```tsx
            import { Rating } from "@brightcodeui/beta-ui";

            export function RatingSizes() {
                return (
                    <div className="flex flex-col gap-2">
                        <Rating value={3} size="sm" />
                        <Rating value={3} size="md" />
                        <Rating value={3} size="lg" />
                    </div>
                );
            }
        ```
    </TabItem>
</Tabs>



### Component API

```tsx
import Rating from "@brightcodeui/beta-ui";

<Rating
  value={3}
  max={5}
  readOnly={false}
  size="md"
  color="default"
  onChange={(newValue) => console.log(newValue)}
  className="my-custom-class"
/>
```