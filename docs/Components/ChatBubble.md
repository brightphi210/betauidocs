# ChatBubble

A versatile chat bubble component for displaying messages in chat interfaces. Perfect for messaging applications, customer support widgets, or any conversation-based UI.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {ChatBubble} from '@brightcodeui/beta-ui';


## Installation

```bash
npm install @brightcodeui/beta-ui
# or
yarn add @brightcodeui/beta-ui
```

## Basic Usage




<Tabs>

    <TabItem value="ui" label="Example" default>
        <div className="chats">
            <ChatBubble 
                message="Hello! How can I help you today?" 
                position="left"
            />

            
            <ChatBubble 
                message="I have a question about your services." 
                position="right"
            />
            <ChatBubble
                message="I'm doing great, thanks for asking!"
                position="right"
                timestamp="12:31 PM"
            />

            <ChatBubble 
                message="Hello! How can I help you today?" 
                position="left"
            />
        </div>
    </TabItem>

    <TabItem value="code" label="code" >
        ```jsx
            import { ChatBubble } from '@brightcodeui/beta-ui';

            function MyChat() {
            return (
                <div className="chat-container">
                    <ChatBubble 
                    message="Hello! How can I help you today?" 
                    position="left"
                />

                
                <ChatBubble 
                    message="I have a question about your services." 
                    position="right"
                />
                <ChatBubble
                    message="I'm doing great, thanks for asking!"
                    position="right"
                    timestamp="12:31 PM"
                />

                <ChatBubble 
                    message="Hello! How can I help you today?" 
                    position="left"
                />
                </div>
            );
            }
        ```
    </TabItem>
</Tabs>




## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | string | Required | The message text to display |
| `position` | `'left'` \| `'right'` | `'left'` | Position of the chat bubble |
| `variant` | `'primary'` \| `'secondary'` \| `'accent'` \| `'neutral'` \| `'success'` \| `'warning'` \| `'error'` | `'primary'` | Color variant of the bubble |
| `avatar` | string | undefined | URL for the avatar image |
| `className` | string | `''` | Additional CSS class names |
| `timestamp` | string | undefined | Time the message was sent |
| `sender` | string | undefined | Name of the message sender |
| `status` | `'typing'` \| `'sent'` \| `'delivered'` \| `'read'` \| `'error'` | undefined | Status of the message |
| `showTail` | boolean | `true` | Whether to show the tail on the bubble |
| `hasMedia` | boolean | `false` | Whether the message contains multimedia |
| `mediaUrl` | string | undefined | Optional media URL (image, etc.) |
| `onClick` | function | undefined | Optional callback when the bubble is clicked |

## Examples

### Basic Left and Right Chat Bubbles

```jsx
// Left bubble (received message)
<ChatBubble
  message="Hello! How are you doing today?"
  position="left"
  timestamp="12:30 PM"
/>

// Right bubble (sent message)
<ChatBubble
  message="I'm doing great, thanks for asking!"
  position="right"
  timestamp="12:31 PM"
/>
```


// Left bubble (received message)
<ChatBubble
  message="Hello! How are you doing today?"
  position="left"
  timestamp="12:30 PM"
/>

// Right bubble (sent message)
<ChatBubble
  message="I'm doing great, thanks for asking!"
  position="right"
  timestamp="12:31 PM"
/>

### With Avatar and Sender Name

```jsx
// Received message with avatar
<ChatBubble
  message="Can you help me with something?"
  position="left"
  variant="secondary"
  avatar="https://i.pravatar.cc/300"
  sender="John Doe"
  timestamp="12:32 PM"
/>

// Sent message with avatar
<ChatBubble
  message="Sure, what do you need help with?"
  position="right"
  variant="secondary"
  avatar="https://i.pravatar.cc/300"
  sender="Jane Smith"
  timestamp="12:33 PM"
/>
```

### Color Variants

The ChatBubble component comes with several color variants that can be used to differentiate message types or senders:

```jsx
// Primary variant (default)
<ChatBubble
  message="This is a primary message"
  variant="primary"
/>

// Secondary variant
<ChatBubble
  message="This is a secondary message"
  variant="secondary"
/>

// Accent variant
<ChatBubble
  message="This is an accent message"
  variant="accent"
/>

// Neutral variant
<ChatBubble
  message="This is a neutral message"
  variant="neutral"
/>

// Success variant
<ChatBubble
  message="Your message was sent successfully!"
  variant="success"
/>

// Warning variant
<ChatBubble
  message="Your connection is unstable"
  variant="warning"
/>

// Error variant
<ChatBubble
  message="Failed to send message"
  variant="error"
/>
```

// Primary variant (default)
<ChatBubble
  message="This is a primary message"
  variant="primary"
/>

// Secondary variant
<ChatBubble
  message="This is a secondary message"
  variant="secondary"
/>

// Accent variant
<ChatBubble
  message="This is an accent message"
  variant="accent"
/>

// Neutral variant
<ChatBubble
  message="This is a neutral message"
  variant="neutral"
/>

// Success variant
<ChatBubble
  message="Your message was sent successfully!"
  variant="success"
/>

// Warning variant
<ChatBubble
  message="Your connection is unstable"
  variant="warning"
/>

// Error variant
<ChatBubble
  message="Failed to send message"
  variant="error"
/>

### Message Status

You can display the status of a message with the `status` prop:

```jsx
<ChatBubble
  message="Hello there!"
  position="right"
  timestamp="3:45 PM"
  status="sent"
/>

<ChatBubble
  message="Is anyone there?"
  position="right"
  timestamp="3:46 PM"
  status="delivered"
/>

<ChatBubble
  message="Can you help me please?"
  position="right"
  timestamp="3:47 PM"
  status="read"
/>

<ChatBubble
  message="Network error!"
  position="right"
  timestamp="3:48 PM"
  status="error"
/>

<ChatBubble
  message=""
  position="left"
  status="typing"
/>
```


<ChatBubble
  message="Hello there!"
  position="right"
  timestamp="3:45 PM"
  status="sent"
/>

<ChatBubble
  message="Is anyone there?"
  position="right"
  timestamp="3:46 PM"
  status="delivered"
/>

<ChatBubble
  message="Can you help me please?"
  position="right"
  timestamp="3:47 PM"
  status="read"
/>

<ChatBubble
  message="Network error!"
  position="right"
  timestamp="3:48 PM"
  status="error"
/>

<ChatBubble
  message=""
  position="left"
  status="typing"
/>

### With Media Content

```jsx
// With media placeholder
<ChatBubble
  message="Check out this image!"
  position="left"
  hasMedia={true}
/>

// With actual media
<ChatBubble
  message="Here's the photo from yesterday"
  position="right"
  hasMedia={true}
  mediaUrl="https://example.com/photo.jpg"
/>
```

### Interactive Bubbles

You can make chat bubbles interactive by using the `onClick` prop:

```jsx
<ChatBubble
  message="Click me to see more details"
  position="left"
  onClick={() => alert('Bubble clicked!')}
/>
```
