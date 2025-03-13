# ProgressBar

A flexible progress bar component built with React and Tailwind CSS that visualizes completion status.

## Installation

```bash
npm install @brightcodeui/beta-ui
```

import { ProgressBar } from '@brightcodeui/beta-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Usage


<Tabs>

  <TabItem value="ui" label="Example" default>
    <div className="space-y-4 w-1/2">
        {/* Basic usage */}
        <ProgressBar value={50} />
        
        {/* With percentage label */}
        <ProgressBar value={75} showLabel={true} className=""/>
        
        {/* Striped and animated */}
        <ProgressBar value={60} hasStripe={true} isAnimated={true} />
        
        {/* Indeterminate for loading states */}
        <ProgressBar isIndeterminate={false} />
        
        {/* Custom color scheme */}
        <ProgressBar value={80} colorScheme="green" />
    </div>
  </TabItem>


  <TabItem value="code" label="Code" >
    ```jsx
        import { ProgressBar } from '@brightcodeui/beta-ui';

        function App() {
        return (
            <div className="space-y-4">
            {/* Basic usage */}
            <ProgressBar value={50} />
            
            {/* With percentage label */}
            <ProgressBar value={75} showLabel={true} />
            
            {/* Striped and animated */}
            <ProgressBar value={60} hasStripe={true} isAnimated={true} />
            
            {/* Indeterminate for loading states */}
            <ProgressBar isIndeterminate={true} />
            
            {/* Custom color scheme */}
            <ProgressBar value={80} colorScheme="green" />
            </div>
        );
        }
    ```
  </TabItem>
</Tabs>


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | number | 0 | Current progress value (0-100) |
| `max` | number | 100 | Maximum value of the progress |
| `min` | number | 0 | Minimum value of the progress |
| `isAnimated` | boolean | false | Enables animation for striped progress bars |
| `isIndeterminate` | boolean | false | Shows an indeterminate loading state |
| `colorScheme` | string | 'blue' | Color theme ('blue', 'green', 'yellow', 'red', 'purple', 'gray') |
| `size` | string | 'md' | Size of the progress bar ('xs', 'sm', 'md', 'lg') |
| `hasStripe` | boolean | false | Adds a striped pattern to the progress bar |
| `showLabel` | boolean | false | Displays percentage text inside the progress bar |
| `className` | string | '' | Additional CSS classes for customization |

## Accessibility

The component includes proper ARIA attributes:
- `role="progressbar"`
- `aria-valuenow`
- `aria-valuemin`
- `aria-valuemax`

## Examples

### Different Sizes

```jsx
<ProgressBar value={60} size="xs" />
<ProgressBar value={60} size="sm" />
<ProgressBar value={60} size="md" />
<ProgressBar value={60} size="lg" />
```
<div className="progressDiv">
    <ProgressBar value={60} size="xs" />
    <ProgressBar value={60} size="sm" />
    <ProgressBar value={60} size="md" />
    <ProgressBar value={60} size="lg" />
</div>

### Custom Styling

```jsx
<ProgressBar 
  value={40} 
  className="rounded-none shadow-lg" 
/>
```