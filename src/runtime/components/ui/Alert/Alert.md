# Alert

Component for displaying an alert message.

## Props

- {string} variant - The variant of the alert (e.g., "success", "warning", "error").
- {string} title - The title of the alert.
- {string} message - The message content of the alert.
- {boolean} dismissable - Whether the alert can be dismissed (true by default).

## Usage

```
<Alert
    :variant="info"
    :title="Alert title"
    :message="Alert message"
    dismissable="false"
/>
```
