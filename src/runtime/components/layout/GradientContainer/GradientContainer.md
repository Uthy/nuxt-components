# GradientContainer

A container with a gradient background.

## Props

- {String} type - The type of gradient the container will have, left to right, top to bottom etc. Default value is 'gradient', other possible types 'gradient-1', 'gradient-2'.

## Slot

Content to be placed inside the container.

## Usage

```
<GradientContainer :type="gradient-1">
content here
</GradientContainer>
```

## Gradient Colors

The following css variables can be used to customize the colors

```
--gradient-color-1: var(--secondary);
--gradient-color-2: var(--primary);
```
