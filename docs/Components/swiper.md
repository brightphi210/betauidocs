---
id: swiper
title: Swiper Component
sidebar_label: Swiper
---

# Swiper Component

The `Swiper` component is a customizable and responsive carousel that supports autoplay, navigation, pagination, and more.

## Props

| Prop              | Type           | Description                                                                                      | Default Value |
|-------------------|----------------|--------------------------------------------------------------------------------------------------|---------------|
| `slides`          | `ReactNode[]`  | An array of slides to display in the swiper. Each slide is a React component.                   | `[]`          |
| `autoplay`        | `boolean`      | Enables or disables autoplay for the swiper.                                                    | `false`       |
| `autoplayInterval`| `number`       | The interval (in milliseconds) for autoplay.                                                    | `5000`        |
| `showNavigation`  | `boolean`      | Displays or hides navigation arrows.                                                            | `true`        |
| `showPagination`  | `boolean`      | Displays or hides pagination dots.                                                              | `true`        |
| `className`       | `string`       | Adds custom styles to the swiper.                                                               | `""`          |
| `slidesPerView`   | `object`       | Defines the number of slides visible for different screen sizes (`mobile`, `tablet`, etc.).     | `{ mobile: 1, tablet: 2, laptop: 3, desktop: 4 }` |

## Examples

### Default Swiper

The default Swiper with navigation, pagination, and no autoplay.

```jsx
import React from 'react';
import {Swiper} from '@brightcodeui/beta-ui';

const DemoSlide = ({ color, text }) => (
  <div className={`w-full h-64 flex items-center justify-center text-white text-2xl font-bold ${color}`}>
    {text}
  </div>
);

const slides = [
  <DemoSlide key={1} color="bg-blue-500" text="Slide 1" />,
  <DemoSlide key={2} color="bg-green-500" text="Slide 2" />,
  <DemoSlide key={3} color="bg-red-500" text="Slide 3" />,
  <DemoSlide key={4} color="bg-yellow-500" text="Slide 4" />,
];

export default function DefaultSwiper() {
  return (
    <Swiper
      slides={slides}
      autoplay={false}
      showNavigation={true}
      showPagination={true}
    />
  );
}

```

### Autoplay Swiper

Enables autoplay with a custom interval.

```jsx
    <Swiper
    slides={slides}
    autoplay={true}
    autoplayInterval={3000}
    />
```


### Without Navigation
Hides navigation arrows while keeping pagination visible.

``` jsx
<Swiper
  slides={slides}
  showNavigation={false}
/>
```

### Without Pagination
Hides pagination dots while keeping navigation visible.

``` jsx
<Swiper
  slides={slides}
  showPagination={false}
/>
```

### Custom Responsive Behavior
Defines a different number of slides per view for each device size.

```jsx
<Swiper
  slides={slides}
  slidesPerView={{
    mobile: 1,
    tablet: 2,
    laptop: 2,
    desktop: 3,
  }}
  autoplay={true}
  autoplayInterval={2000}
/>
```

### Custom Autoplay Interval
Configures a faster autoplay interval.

```jsx
<Swiper
  slides={slides}
  autoplay={true}
  autoplayInterval={2000}
/>
```

### Custom Styling
Adds custom styles to the Swiper container.


```jsx
<Swiper
  slides={slides}
  className="rounded-lg shadow-lg"
/>
```