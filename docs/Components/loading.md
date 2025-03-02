---
sidebar_position: 4
---

# Loading

The Loading component is a versatile and customizable loader that can be used to indicate loading states in your React application. It supports multiple types of loaders, sizes, and colors to fit various design needs.

## Overview

The Loading component is built using React and Tailwind CSS. It provides five different types of loaders:

- Spinner
- Dots
- Bar
- Pulse
- Ring

Each loader type can be customized with different sizes and colors.

## Props

The Loading component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'spinner' \| 'dots' \| 'bar' \| 'pulse' \| 'ring'` | (required) | Determines the type of loader to display. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Sets the size of the loader. |
| `color` | `string` | `'text-blue-500'` | Specifies the color of the loader using Tailwind CSS color classes. |
| `className` | `string` | `''` | Additional CSS classes to apply to the loader. |

## Usage

Here are some examples of how to use the Loading component:

import {Loading} from '@brightcodeui/beta-ui';


<div className="myLoader">
    <Loading type="spinner" size="lg"  color="text-green-500"/>
    <Loading type="dots" size="lg"  color="bg-green-500 "/>
    <Loading type="pulse" size="lg" color="bg-purple-500" />
    <Loading type="ring" size="lg"  />
</div>

```jsx
import {Loading} from '@brightcodeui/beta-ui';


// Customized spinner
<Loading type="spinner" size="lg"  />

// Dots loader
<Loading type="dots" size="sm" color="bg-green-500" />

// Pulse loader
<Loading type="pulse" size="lg" color="bg-purple-500" />

// Ring loader
<Loading type="ring" size="md" />
```


## Customization

### Size

The `size` prop accepts three values:

- `'sm'`: Sets the width and height to 1rem (16px)
- `'md'`: Sets the width and height to 2rem (32px)
- `'lg'`: Sets the width and height to 3rem (48px)

### Color

The `color` prop accepts Tailwind CSS color classes. For example:

- `'text-blue-500'`
- `'text-red-600'`
- `'text-green-400'`

### Additional Classes

You can pass additional CSS classes using the `className` prop to further customize the appearance of the loader.
