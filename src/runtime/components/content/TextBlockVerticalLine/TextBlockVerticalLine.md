# TextBlockVerticalLine

Text block with a vertical line on the left of content.
Vertical line color could be changed with the `--vertical-text-highlight` variable.

## props

- title: The title of the block

## Slot

- content: name of the slot that takes the content

## Usage

```
<TextBlockVerticalLine title="Our Mission">
<template #content>
 content goes here
</template>
</TextBlockVerticalLine>
```

## Usage in nuxtcontent .md file

```
::text-block-vertical-line{title="Our Mission"}
#content
content goes here
::
```
