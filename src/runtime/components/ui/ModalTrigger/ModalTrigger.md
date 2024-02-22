# ModalTrigger

This component is used to trigger a modal dialog.

## Props

- `{String}` targetModal `{required}` - The id of the target modal dialog to be triggered.

## Slots

- trigger - This takes the content of the trigger button.

## Example

```
<ModalTrigger targetModal="dialog-example">
    <template #trigger>
        Open Modal
    </template>
</ModalTrigger>
```
