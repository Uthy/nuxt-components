# TextBlockWithIcon

Component for displaying a text block with an accompanying icon.
Text content on the left and the icon placed in a gradient background on the right

## Props

- reversed: {Boolean} - Determines if the layout should be reversed, meaning text content on the right and icon on the left.
- icon: {Object} - The icon object containing the src and alt attributes.
- content: {String} - The HTML content to be displayed in the text block.

## Usage

```
<TextBlockWithIcon :icon="iconObject">
 <template #content>
 content goes here
 </template>
</TextBlockWithIcon>
```

## Gradient Colors

Gradient colors can be customized by overriding the following variables

```
--gradient-color-1: var(--secondary);
--gradient-color-2: var(--primary);
```
