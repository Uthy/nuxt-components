# TextBlockWIthImage

Component for displaying a text block with an image.

## Props

- {Object} image - The image object containing the source and alt text.
- {Boolean} reversed - Whether to reverse the layout of the text and image.

## Slot

- content - The content to be displayed in the text block usually starting with a heading.

## Usage

```
<TextBlockWithImage :image="ImageObject" reversed>
    <template #content>
        text content here
    </template>
</TextBlockWithImage>
```
