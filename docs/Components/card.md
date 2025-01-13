---
id: card
title: Card Component
sidebar_label: Card
---


The `Card` component is a versatile UI element designed to display content in a structured and customizable layout. Below, you will find examples and details of how to use it.

## Default Card

```jsx
import {Card} from '@brightcodeui/beta-ui';

<Card 
  imageSrc="https://placehold.co/600x400" 
  title="Product Name" 
  description="This is a sample product description." 
  price="$99.99" 
  buttonText="Add to Cart" 
  onButtonClick={() => console.log('Button clicked!')} 
/>
```

### Props

| Prop           | Type       | Description                                     |
|----------------|------------|-------------------------------------------------|
| `imageSrc`     | `string`   | URL for the card's image.                      |
| `title`        | `string`   | Title of the card.                             |
| `description`  | `string`   | Description text for the card.                 |
| `price`        | `string`   | Price label for the card.                      |
| `buttonText`   | `string`   | Text for the button.                           |
| `onButtonClick`| `function` | Callback function when the button is clicked.  |
| `className`    | `string`   | Additional class names for styling.            |
| `children`     | `ReactNode`| Custom content to render inside the card.      |

## Custom Content Example

```tsx
<Card 
  className="bg-gray-100 border border-gray-300"
>
  <div>
    <h2 className="text-lg font-bold">Custom Header</h2>
    <p className="text-gray-600">This is a custom section inside the card.</p>
  </div>
</Card>
```

This example showcases how to provide custom content using the `children` prop. The `className` prop allows you to apply additional styling.

## Without Image Example

```tsx
<Card 
  title="No Image Card"
  description="This card has no image but still retains its structure."
  buttonText="Learn More"
  onButtonClick={() => alert('Button clicked!')} 
/>
```

Here, the `imageSrc` prop is omitted, demonstrating the flexibility of the `Card` component to work without an image.

## Fully Custom Content Example

```tsx
<Card>
  <div>
    <h2 className="text-2xl font-bold">Fully Custom Content</h2>
    <p className="text-gray-600">
      This card is entirely customized with no default props like title, description, or image.
    </p>
  </div>
</Card>
```

This example shows a card with entirely custom content, bypassing default props.

---

These examples provide a foundation for implementing the `Card` component in various scenarios. Feel free to customize it further to suit your project needs.
