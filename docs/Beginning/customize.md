---
sidebar_label: Customized
sidebar_position: 3
---

# Customizing Beta UI Components

Learn how to tailor Beta UI components to fit your project's unique design requirements.

## Introduction

Beta UI components are designed to be highly customizable, allowing you to create a consistent look and feel across your application. This guide will walk you through various ways to customize components, using the Button component as a primary example.

## Built-in Customization Options

Many Beta UI components, including the Button, come with built-in props for easy customization. Here are some common props you can use:

### Size

The `size` prop allows you to control the size of the component. Common values include:

- `"sm"` (small)
- `"md"` (medium, default)
- `"lg"` (large)

### Color

The `color` prop lets you set the color scheme of the component. Beta UI provides a range of predefined colors:

- `"primary"`
- `"secondary"`
- `"success"`
- `"danger"`
- `"warning"`
- `"info"`

## Using className for Tailwind CSS Customization

In addition to the built-in props, you can use the `className` prop to apply Tailwind CSS classes directly to the component. This allows for more fine-grained control over the component's appearance.

## Examples

Let's look at some examples of customizing the Button component:

```tsx project="Beta UI" file="examples/CustomButtons.tsx"
import React from 'react';
import { Button } from '@brightcodeui/beta-ui';

export default function CustomButtons() {
  return (
    <div className="space-y-4">
      {/* Using built-in props */}
      <Button size="sm" color="primary">
        Small Primary Button
      </Button>
      
      <Button size="lg" color="secondary">
        Large Secondary Button
      </Button>
      
      {/* Using className for Tailwind customization */}
      <Button 
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
      >
        Custom Gradient Button
      </Button>
      
      {/* Combining built-in props with className */}
      <Button 
        size="lg" 
        color="success"
        className="uppercase tracking-wider border-2 border-green-700"
      >
        Enhanced Success Button
      </Button>
      
      {/* Overriding default styles */}
      <Button 
        color="primary"
        className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-none"
      >
        Customized Primary Button
      </Button>
    </div>
  );
}