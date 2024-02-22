# HeaderBlockTwo

This component represents a header block with a title and an optional image.

## Props

- title: The title of the header block.
- image: An object representing the image to be displayed. It has two properties:
- src: The source URL of the image.
- alt: The alternative text for the image.

## Slot

- content: The content to be displayed in the header block.

## Example usage:

```
 <HeaderBlockTwo :title="'Welcome to Rivet Vue'" :image="{ src: 'https://example.com/image.jpg', alt: 'Example Image' }">
   <p>This is the content of the header block.</p>
 </HeaderBlockTwo>
```
