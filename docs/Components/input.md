---
sidebar_position: 3
---

# Input

The `Input` component is a flexible and customizable input field that can be used in forms and other user input scenarios. It supports labels, error messages, and custom styling.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Optional label text for the input field |
| `error` | `string` | `undefined` | Optional error message to display below the input |
| `className` | `string` | `''` | Additional CSS classes to apply to the input element |
| `...props` | `InputHTMLAttributes<HTMLInputElement>` | - | All other props are passed directly to the underlying `<input>` element |

## Import

```jsx
import Input from '@brightcodeui/beta-ui';
```

## Basic Usage

import {Input, Button} from '@brightcodeui/beta-ui';

<Input
  label="Username"
  name="username"
  type="text"
  placeholder="Enter your username"
/>

```jsx
<Input
  label="Username"
  id="username"
  name="username"
  type="text"
  placeholder="Enter your username"
/>
```

## Advanced Usage

### With Error Message

<Input
  label="Email"
  id="email"
  name="email"
  type="email"
  placeholder="Enter your email"
  error="Please enter a valid email address"
/>

```jsx
<Input
  label="Email"
  id="email"
  name="email"
  type="email"
  placeholder="Enter your email"
  error="Please enter a valid email address"
/>
```

### With Custom Styling

<Input
  label="Password"
  id="password"
  name="password"
  type="password"
  placeholder="Enter your password"
  className="bg-gray-100 text-lg" 
/>

```jsx
<Input
  label="Password"
  id="password"
  name="password"
  type="password"
  placeholder="Enter your password"
  className="bg-gray-100 text-lg"
/>
```

### Using Ref


<Input
    label="Focus Me"
    id="focusMe"
    name="focusMe"
    type="text"
/>
<div className="myAlerta">
    <Button size="md" color="blue" className="mb-20" fontWeight="bold" >Focus Input</Button>
</div>


```jsx
import { useRef } from 'react';

function MyForm() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Input
        ref={inputRef}
        label="Focus Me"
        id="focusMe"
        name="focusMe"
        type="text"
      />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

## Accessibility

The `Input` component is designed with accessibility in mind:

- It uses semantic HTML by utilizing the `<label>` element, which is properly associated with the input using the `htmlFor` attribute.
- Error messages are linked to inputs, allowing screen readers to announce them when the input is focused.
- The component supports all standard HTML input attributes, allowing you to add ARIA attributes as needed.

## Styling

The `Input` component comes with default styling using Tailwind CSS classes. You can customize the appearance by:

1. Passing additional classes through the `className` prop.
2. Modifying the default classes in the component's source code.
3. Overriding styles in your CSS by targeting the component's classes.

## Best Practices

1. Always provide a `label` for better accessibility and user experience.
2. Use the `error` prop to display validation messages.
3. Utilize the `type` prop to specify the appropriate input type (e.g., "text", "email", "password").
4. When using the component in a form, remember to include `name` and `id` props for proper form submission and label association.
5. Consider using the `required` prop when the field is mandatory.

## Examples

### Login Form


<Input
    label="Username"
    id="username"
    name="username"
    type="text"
    required
    placeholder="Enter your username"

/>
<Input
    label="Password"
    id="password"
    name="password"
    type="password"
    required
    placeholder="Enter your password"

/>

<div className="myAlerta">
    <Button size="sm" color="blue" className="mb-20" fontWeight="bold" >Log In</Button>
</div>

```jsx
import { useState } from 'react';
import Input from '@/components/Input';

function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form validation and submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Username"
        id="username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
        required
      />
      <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
}
```

This example demonstrates how to use the `Input` component in a login form, including state management, change handlers, and error display.