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

```jsx
import {Loading} from '@brightcodeui/beta-ui';

// Basic usage with default props
<Loading type="spinner" />

// Customized spinner
<Loading type="spinner" size="lg" color="text-red-500" />

// Dots loader
<Loading type="dots" size="sm" color="text-green-500" />

// Bar loader
<Loading type="bar" size="md" color="text-yellow-500" />

// Pulse loader
<Loading type="pulse" size="lg" color="text-purple-500" />

// Ring loader
<Loading type="ring" size="md" color="text-gray-500" />
```

## Loader Types

### Spinner

The spinner loader uses the `FaSpinner` icon from `react-icons/fa` and applies a spinning animation.

### Dots

The dots loader creates three bouncing dots with a slight delay between each dot's animation.

### Bar

The bar loader displays a horizontal bar that animates from left to right.

### Pulse

The pulse loader shows a circle that fades in and out.

### Ring

The ring loader displays a circular border that spins.

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

## Notes

- The component uses Tailwind CSS classes for styling. Make sure your project is set up with Tailwind CSS for the styles to work correctly.
- The `FaSpinner` icon is imported from `react-icons/fa`. Ensure this package is installed in your project.
- Custom animations (`animate-loading-bar`) are used for the bar loader. You may need to define this animation in your Tailwind CSS configuration.

## Accessibility

The Loading component doesn't include any specific accessibility features. When using this component, consider adding appropriate `aria-` attributes or text for screen readers to improve accessibility in your application.