---
sidebar_position: 1
sidebar_label: Avatar
---

import React from "react";

## Avatar Component

The `Avatar` component is used to display user profile pictures, initials, and status badges. It supports multiple sizes, badges, and customization options.

### Props

| Prop Name   | Type   | Default | Description                               |
|-------------|--------|---------|-------------------------------------------|
| `src`       | string | -       | The source URL for the avatar image.      |
| `name`      | string | -       | The name to display as initials if `src` is unavailable. |
| `size`      | string | "md"   | The size of the avatar. Options: `xs`, `sm`, `md`, `lg`, `xl`. |
| `badge`     | string | -       | The badge to display. Options: `online`, `offline`, `away`. |
| `className` | string | -       | Additional CSS classes for styling.       |

### Usage
import {Avatar} from "@brightcodeui/beta-ui";


```jsx
import {Avatar} from "@brightcodeui/beta-ui";

<Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" />
```


#### Default

Displays a default avatar with an image.

```jsx
<Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" />
```
<Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" />


#### With Initials

Displays the initials of the name if no `src` is provided.

```jsx
<Avatar name="John Doe" size="md" />
```
<Avatar name="John Doe" size="md" />


#### With Badge

Displays a badge indicating the user's status.

```jsx
<Avatar src="https://i.pravatar.cc/300" name="Jane Smith" size="md" badge="online" />
```
<Avatar src="https://i.pravatar.cc/300" name="Jane Smith" size="md" badge="online" />


#### Sizes

Shows avatars in different sizes.

```jsx
<div className="flex items-end space-x-4">
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="xs" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="sm" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="lg" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="xl" />
</div>
```
<div className="flex items-end space-x-4">
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="xs" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="sm" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="lg" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="xl" />
</div>

#### Group of Avatars

Displays a group of avatars.



```jsx
<div className="flex -space-x-4">
  <Avatar src="https://i.pravatar.cc/300?img=1" />
  <Avatar src="https://i.pravatar.cc/300?img=2" />
  <Avatar src="https://i.pravatar.cc/300?img=3" />
  <Avatar src="https://i.pravatar.cc/300?img=4" />
</div>
```
<div className="flex -space-x-4">
  <Avatar src="https://i.pravatar.cc/300?img=1" />
  <Avatar src="https://i.pravatar.cc/300?img=2" />
  <Avatar src="https://i.pravatar.cc/300?img=3" />
  <Avatar src="https://i.pravatar.cc/300?img=4" />
</div>

#### Stacked Avatars

Shows stacked avatars with a summary label.

```jsx
<div className="flex items-center space-x-2">
  <div className="flex -space-x-4">
    <Avatar src="https://i.pravatar.cc/300?img=1" />
    <Avatar src="https://i.pravatar.cc/300?img=2" />
    <Avatar src="https://i.pravatar.cc/300?img=3" />
  </div>
  <span className="text-sm font-medium text-gray-700">+3 others</span>
</div>
```

<div className="flex items-center space-x-2">
  <div className="flex -space-x-4">
    <Avatar src="https://i.pravatar.cc/300?img=1" />
    <Avatar src="https://i.pravatar.cc/300?img=2" />
    <Avatar src="https://i.pravatar.cc/300?img=3" />
  </div>
  <span className="text-sm font-medium text-gray-400">+3 others</span>
</div>

#### Avatar with Badges

Displays avatars with different badges.

```jsx
<div className="flex space-x-4">
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" badge="online" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" badge="offline" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" badge="away" />
</div>
```

<div className="flex space-x-4">
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" badge="online" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" badge="offline" />
  <Avatar src="https://i.pravatar.cc/300" name="John Doe" size="md" badge="away" />
</div>

#### Custom Style

Applies custom styling to the avatar.

```jsx
<Avatar
  src="https://i.pravatar.cc/300"
  name="John Doe"
  size="md"
  className="ring-2 ring-blue-500 ring-offset-2"
/>
```

<Avatar
  src="https://i.pravatar.cc/300"
  name="John Doe"
  size="md"
  className="ring-2 ring-blue-500 ring-offset-2"
/>
