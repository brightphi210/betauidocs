---
sidebar_position: 1
---

# Button

The Button component is a versatile and customizable element from the @brightcodeui/beta-ui library.

```bash
npm i @brightcodeui/beta-ui
```

## Usage

Import the Button component in your React file:

```jsx
import { Button } from '@brightcodeui/beta-ui';
```

Example:

import { Button } from '@brightcodeui/beta-ui';

```jsx
<Button color="blue" size="sm">Blue</Button>
<Button color="red" size="md">Red</Button>
<Button color="success" size="lg">Green</Button>
```
<div className="myDiv">
    <Button color="blue" size="sm" fontWeight="semibold">Blue Button</Button>
    <Button color="green" size="lg" fontWeight="semibold">Green Button</Button>
    <Button color="yellow" size="md" fontWeight="semibold">Red Button</Button>
</div>

### Sizes

Customize the size of your buttons:

- `sm` (small)
- `md` (medium, default)
- `lg` (large)

Example:

```jsx
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>
```

### Custom Styles

You can add custom Tailwind CSS classes to further customize your button:

```jsx
<Button size="sm" className="rounded-md bg-orange-400 hover:bg-orange-500 text-white">
  Custom Orange
</Button>

<Button size="md" className="rounded-md bg-white text-black">
  Custom white
</Button>
```

<div className="myDiv">
    <Button size="md" className="myBtn" fontWeight="semibold">Custom Orange</Button>
    <Button size="sm" className="myBtn2" fontWeight="semibold">Custom white</Button>
</div>


### Disabled State

Buttons can be disabled:

```jsx
<Button disabled={true}>Disabled Button</Button>
```
<Button size="sm" className="myBtn3" fontWeight="semibold">Disabled Button</Button>



### Icon Support

The Button component likely supports icons:

import { IoArrowForwardOutline } from "react-icons/io5";


```jsx
import { IoArrowForwardOutline } from "react-icons/io5";


<Button color="white" size="md" fontWeight="semibold" className="flex items-center gap-3">
  Next <IoArrowForwardOutline className="ml-2" />
</Button>
```

<Button color="white" size="md" className="myBtn4" fontWeight="semibold">Next <IoArrowForwardOutline /></Button>

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'white' \| 'red' \| 'yellow' \| 'black' \| 'green'` | `'green'` | Sets the color theme of the button |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Determines the size of the button |
| `disabled` | `boolean` | `false` | If true, disables the button |
| `className` | `string` | `''` | Allows adding custom Tailwind CSS classes |

## Best Practices

- Use clear and concise text on buttons to describe the action they perform.
- Choose appropriate colors to convey the button's purpose (e.g., green for positive actions, red for destructive actions).
- Ensure sufficient spacing between buttons to prevent accidental clicks on touch devices.
- Use the `disabled` prop to indicate when a button action is not available, but provide a reason to the user (e.g., through a tooltip).

## Customization

```

This documentation provides a comprehensive overview of the Button component from your @brightcodeui/beta-ui library. It covers installation, basic usage, available features (colors, sizes, etc), custom styling with Tailwind CSS, accessibility considerations, and best practices.