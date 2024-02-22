# ModalDialog

A reusable modal dialog component. This Should be used along with the ModaTrigger Component. The modalId should be the same as the targetModal prop of the ModalTrigger.

## props

- {String} modalId - The unique ID of the modal dialog.
- {Boolean} closeButton - Whether to display a close button in the dialog, it is enabled by default.

## Slots

- title - The title of the modal dialog.
- body - The content of the modal dialog.
- controls - The controls of the modal dialog at the footer, these could be buttons or any other footer content.

## Example

```
<ModalTrigger targetModal="dialog">
    <template #trigger>
        Open Modal
    </template>
</ModalTrigger>

 <ModalDialog modalId="dialog" :closeButton="false">
   <template #title>
     Modal title
   </template>
   <template #body>
     Dialog body
   </template>
   <template #controls>
     Dialog controls
   </template>
 </ModalDialog>
```

## Custom Close Button

To use a custom close button other than the close button at the top right corner of the dialog simply add the following data attribute along with the id of the dialog .`data-rvt-dialog-close="dialog"`.
