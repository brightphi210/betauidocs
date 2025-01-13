---
sidebar_position: 5
---

# Select

The `Select` component is a customizable dropdown selector that allows users to choose an option from a list. It provides a clean and accessible interface for selecting items, with support for placeholder text, disabled state, and custom styling.

## Installation

To use the `Select` component in your project, you need to install the required dependencies:

```bash
npm install @brightcodeui/beta-ui
```

Then, you can import the component into your React application:

```jsx
import {Select} from '@brightcodeui/beta-ui';
```

## Props

The `Select` component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | `required` | An array of objects representing the selectable options. Each object should have a `value` and a `label` property. |
| `value` | `string` | `undefined` | The currently selected value. If provided, the component will display the corresponding label. |
| `onChange` | `(value: string) => void` | `undefined` | A callback function that is called when an option is selected. It receives the selected value as an argument. |
| `placeholder` | `string` | `'Select an option'` | The text to display when no option is selected. |
| `className` | `string` | `''` | Additional CSS classes to apply to the component's root element. |
| `disabled` | `boolean` | `false` | If `true`, the select component will be disabled and cannot be interacted with. |

## Usage

Here's a basic example of how to use the `Select` component:


import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Select } from '@brightcodeui/beta-ui';

<BrowserOnly>
  {() => {
    const App = () => {
      const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];

      const [selectedValue, setSelectedValue] = useState('');

      const handleChange = (value) => {
        setSelectedValue(value);
        console.log('Selected value:', value);
      };

      return (
        <div>
          <Select
            options={options}
            value={selectedValue}
            onChange={handleChange}
            placeholder="Choose an option"
          />
        </div>
      );
    };

    return <App />;
  }}
</BrowserOnly>





```jsx
import React, { useState } from 'react';
import {Select} from '@brightcodeui/beta-ui';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function Example() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value) => {
    setSelectedValue(value);
    console.log('Selected value:', value);
  };

  return (
    <Select
      options={options}
      value={selectedValue}
      onChange={handleChange}
      placeholder="Choose an option"
    />
  );
}

export default Example;
```

## Customization

You can customize the appearance of the `Select` component by passing additional CSS classes through the `className` prop:

```jsx
<Select
  options={options}
  value={selectedValue}
  onChange={handleChange}
  className="w-64 text-lg"
/>
```

## Accessibility

The `Select` component is built with accessibility in mind:

- It uses semantic HTML elements for better screen reader support.
- The dropdown toggle button has appropriate `aria-haspopup` and `aria-expanded` attributes.
- The options list has the `role="listbox"` attribute.
- Each option has the `role="option"` and `aria-selected` attributes.

## Notes

- The component uses the `useRef` and `useEffect` hooks to handle closing the dropdown when clicking outside of it.
- The dropdown position is absolute and will appear below the select button.
- The component uses icons from the `react-icons` library for the dropdown arrow and the checkmark for the selected option.

## TypeScript

The `Select` component is written in TypeScript and exports the following types:

```typescript
export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}
```

You can import and use these types in your TypeScript projects for better type checking and autocompletion.

## Conclusion

The `Select` component provides a flexible and accessible way to add dropdown selection functionality to your React application. With its customizable options and TypeScript support, it can be easily integrated into various project types and designs.