---
sidebar_position: 4
---

# Loading

The Loading component provides visual feedback when an operation is in progress, helping to improve user experience by indicating that the application is working.

## Import

import { Loading } from '@brightcodeui/beta-ui';


```jsx
import { Loading } from '@brightcodeui/beta-ui';
```

## Overview

The Loading component is built using React and Tailwind CSS, offering five different types of loaders to suit various design needs and contexts. Each loader type is fully customizable with different sizes and colors.

## Usage Examples

### Basic Usage

```jsx
import { Loading } from '@brightcodeui/beta-ui';

function LoadingExample() {
  return <Loading type="spinner" />;
}
```

### Different Loader Types

```jsx
import { Loading } from '@brightcodeui/beta-ui';

function LoaderTypes() {
  return (
    <div className="flex gap-6">
      <Loading type="spinner" />
      <Loading type="dots" />
      <Loading type="bar" />
      <Loading type="pulse" />
      <Loading type="ring" />
    </div>
  );
}
```

<div className="myLoader">
    <Loading type="spinner" />
    <Loading type="dots" />
    <Loading type="ring" />
</div>

### Sizes

```jsx
import { Loading } from '@brightcodeui/beta-ui';

function LoaderSizes() {
  return (
    <div className="space-y-4">
      <div className="flex gap-6 items-center">
        <Loading type="spinner" size="sm" />
        <Loading type="spinner" size="md" />
        <Loading type="spinner" size="lg" />
      </div>
      <div className="flex gap-6 items-center">
        <Loading type="ring" size="sm" />
        <Loading type="ring" size="md" />
        <Loading type="ring" size="lg" />
      </div>
    </div>
  );
}
```

 <div className="space-y-4">
    <div className="myLoader">
    <Loading type="spinner" size="sm" />
    <Loading type="spinner" size="md" />
    <Loading type="spinner" size="lg" />
    </div>

    <div className="myLoader">
    <Loading type="dots" size="sm" />
    <Loading type="dots" size="md" />
    <Loading type="dots" size="lg" />
    </div>


    <div className="myLoader">
    <Loading type="ring" size="sm" />
    <Loading type="ring" size="md" />
    <Loading type="ring" size="lg" />
    </div>
</div>

### Colors

```jsx
import { Loading } from '@brightcodeui/beta-ui';

function LoaderColors() {
  return (
    <div className="space-y-4">
      <Loading type="spinner" color="text-blue-500" />
      <Loading type="spinner" color="text-red-600" />
      <Loading type="spinner" color="text-green-400" />
      <Loading type="spinner" color="text-purple-500" />
    </div>
  );
}
```

### With Custom Class Names

```jsx
import { Loading } from '@brightcodeui/beta-ui';

function CustomLoadingExample() {
  return (
    <Loading 
      type="dots"
      size="lg"
      color="text-indigo-600"
      className="shadow-lg p-4 rounded-md bg-white"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'spinner' \| 'dots' \| 'bar' \| 'pulse' \| 'ring'` | (required) | Determines the type of loader to display. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Sets the size of the loader. |
| `color` | `string` | `'text-blue-500'` | Specifies the color of the loader using Tailwind CSS color classes. |
| `className` | `string` | `''` | Additional CSS classes to apply to the loader. |
