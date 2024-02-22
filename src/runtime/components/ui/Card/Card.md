# Card

A card component that displays content in a visually appealing manner.

## Props

- {Object} image - The image object containing the src and alt text.
- {string} title - The title of the card.
- {boolean} horizontal - Determines if the card should be displayed horizontally (false by default).
- {string} - xs, sm, md, lg, xl - Card can also be used directly as a column. e.g sm="6" to set a class of rvt-cols-sm-6

## Slot

- content - The main content of the card.
- actions - Actions or buttons associated with the card.
- meta - Additional information or metadata in the footer of the card.

## Usage

```
<Card title="Card Title">
    <template #content>
        <div>Cared body</div>
    </template>
    <template #actions>
        <div> Card links</div>
    </template>
    <template #meta>
        <div> Footer content of Card</div>
    </template>
</Card>
```
