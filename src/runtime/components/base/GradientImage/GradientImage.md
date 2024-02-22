# Image with Gradient Background

A component that displays an image with a gradient overlay.

## Props

- image: The image object containing the `src` and `alt` attributes.
- gradientType: The type of gradient to apply as the background. (There are two custom types: 'gradient' and 'gradient-2')

### Example

```
<GradientImage :image="{ src: 'https://www.example.com/image.jpg', alt: 'Image Alt Text' }" gradientType="gradient" />
```
