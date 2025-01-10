---
sidebar_position: 2
---

# Installation

Learn how to install and set up Beta UI in your project.

## Supported Frameworks

Beta UI is designed to work seamlessly with popular JavaScript frameworks:

<!-- ![Supported Frameworks](/placeholder.svg?height=100&width=400) -->

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (usually comes with Node.js) or yarn

## Installation Steps

### React

1. Create a new React project (if you haven't already):

   ```bash
   npx create-react-app my-beta-ui-app
   cd my-beta-ui-app
   ```

2. Install Beta UI:

   ```bash
   npm install @brightcodeui/beta-ui
   # or
   yarn add @brightcodeui/beta-ui
   ```

3. Import and use Beta UI components in your React application:

   ```jsx
   import { Button, Input } from '@brightcodeui/beta-ui';

   function App() {
     return (
       <div>
         <Button>Click me</Button>
         <Input placeholder="Enter text" />
       </div>
     );
   }
   ```

### Next.js

1. Create a new Next.js project (if you haven't already):

   ```bash
   npx create-next-app my-beta-ui-nextjs
   cd my-beta-ui-nextjs
   ```

2. Install Beta UI:

   ```bash
   npm install @brightcodeui/beta-ui

   # or
   yarn add @brightcodeui/beta-ui
   ```

3. Import and use Beta UI components in your Next.js pages or components:

   ```jsx
   import { Button, Input } from '@brightcodeui/beta-ui';

   export default function Home() {
     return (
       <div>
         <Button>Click me</Button>
         <Input placeholder="Enter text" />
       </div>
     );
   }
   ```

### Vue.js

1. Create a new Vue.js project (if you haven't already):

   ```bash
   npm init vue@latest my-beta-ui-vue
   cd my-beta-ui-vue
   ```

2. Install Beta UI for Vue:

   ```bash
   npm install @brightcodeui/beta-ui
   # or
   yarn add @brightcodeui/beta-ui
   ```

3. Import and use Beta UI components in your Vue.js application:

   ```jsx
   <template>
     <div>
       <Button>Click me</Button>
       <Input placeholder="Enter text" />
     </div>
   </template>

   <script>
   import { Button, Input } from '@brightcodeui/beta-ui';

   export default {
     components: {
       Button,
       Input,
     },
   };
   </script>
   ```

## Configuration

Beta UI works out of the box with default styles, but you can customize it to match your project's design system. Refer to our [Customization](/docs/Beginning/customize) guide for more information on theming and configuration options.

## Next Steps

Now that you have Beta UI installed, check out our [Components](/docs/Beginning/customize) documentation to learn how to use and customize each component in your application.

<!-- For more advanced usage and best practices, visit our [Guides](/docs/guides) section.

If you encounter any issues or have questions, please refer to our [Troubleshooting](/docs/troubleshooting) page or reach out to our community on [GitHub](https://github.com/beta-ui/beta-ui/issues). -->