---
sidebar_position: 1
id: accordion
slug: /components/accordion
title: Accordion
description: Documentation for the Accordion component showcasing usage examples and customization options.
---

# Accordion Component

The `Accordion` component is a versatile UI element used to display collapsible content. Below are the details and examples to help you integrate and customize the `Accordion` component in your project.

## Importing the Component

import {Accordion} from '@brightcodeui/beta-ui';


```tsx
import {Accordion} from '@brightcodeui/beta-ui';
```

## Props

| Prop       | Type   | Description                                   |
|------------|--------|-----------------------------------------------|
| `title`    | string | The title displayed on the accordion header.  |
| `content`  | string | The content inside the accordion.             |
| `type`     | string | The style of the icon (`arrow` or `plus`).    |
| `className`| string | Additional classes for custom styling.        |

## Usage Examples

### Default Accordion

A simple accordion with an arrow icon.

    <div className="myCard">
        <Accordion 
            title="Accordion Title" 
            content="This is the content of the accordion." 
            type="arrow" 
            className="myAccordin"
        />
    </div>

```tsx
<Accordion 
  title="Accordion Title" 
  content="This is the content of the accordion." 
  type="arrow" 
/>
```

### Accordion with Plus Icon

An accordion that uses a plus/minus icon for expansion and collapse.

```tsx
<Accordion 
  title="Accordion with Plus Icon" 
  content="This accordion uses a plus/minus icon." 
  type="plus" 
/>
```

### Custom Styled Accordion

An accordion with additional styling.

```tsx
<Accordion 
  title="Custom Styled Accordion" 
  content="This accordion has custom styling." 
  type="arrow" 
  className="bg-gray-100 text-gray-800" 
/>
```

### Accordion with Long Content

An accordion designed to handle long content gracefully.

```tsx
<Accordion 
  title="Accordion with Long Content" 
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc." 
  type="arrow" 
  className="w-1/2" 
/>
```

### Multiple Accordions

Displaying multiple accordions in a stack with spacing.

    <div className="space-y-4 myCard" >
    <Accordion 
        title="First Accordion" 
        content="Content of the first accordion" 
        type="arrow" 
        className="myAccordin"
    />
    <Accordion 
        title="Second Accordion" 
        content="Content of the second accordion" 
        type="plus" 
        className="myAccordin"
    />
    <Accordion 
        title="Third Accordion" 
        content="Content of the third accordion" 
        type="arrow" 
        className="myAccordin"
    />
    </div>


```tsx
<div className="space-y-4">
  <Accordion 
    title="First Accordion" 
    content="Content of the first accordion" 
    type="arrow" 
  />
  <Accordion 
    title="Second Accordion" 
    content="Content of the second accordion" 
    type="plus" 
  />
  <Accordion 
    title="Third Accordion" 
    content="Content of the third accordion" 
    type="arrow" 
  />
</div>
```

## Customization

The `Accordion` component supports customization through the following:

- **Icon Type:** Choose between `arrow` or `plus` for the expansion indicator.
- **Styling:** Add custom CSS classes using the `className` prop to modify the appearance.

## Storybook Stories

This component is showcased in Storybook with the following stories:

1. **Default:** Basic accordion with an arrow icon.
2. **With Plus Icon:** Accordion using a plus/minus icon.
3. **Custom Style:** Accordion with additional styles.
4. **Long Content:** Accordion with long text content.
5. **Multiple Accordions:** Example of using multiple accordions in a layout.

