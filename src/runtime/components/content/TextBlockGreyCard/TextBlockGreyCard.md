# TextBlockGreyCard

A Text block section with content on the left and right.
Right content is displayed in a grey background, usually a short paragraph or any html element. Content appears in the middle of the card with full margin.
Left content could include a heading followed by paragraphs and/or ctas or any other html elements.

## Usage

```
<TextBlockGreyCard>
<template #left>
    content for left area
</template>
<template #right>
 content that appears in the grey card.
</template>
<template #right2>
 appears below the first grey crad on the right. Also a grey card
</template>
</TextBlockGreyCard>
```

## Usage in nuxtcontent .md file

```
::text-block-grey-card
#left
left area content
#right
right area content for grey card
#right2
for special cases where we need an additional box under the first grey card
::
```
