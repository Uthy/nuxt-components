# Stat

A component that displays a statistic with an icon, number, description, and optional link.

## Props

- {Object} stat - The statistic object containing the icon, numbers, description, and link.
- {Object} stat.icon - The icon object containing the source and alt text for the icon.
- {string} stat.icon.src - The source URL of the icon image.
- {string} stat.icon.alt - The alt text for the icon image.
- {string} stat.numbers - The number to be displayed as the statistic.
- {string} stat.description - The description of the statistic.
- {Object} stat.link - The link object containing the URL and title for the optional link.
- {string} stat.link.url - The URL of the optional link.
- {string} stat.link.title - The title of the optional link.

## Usage

```
<Stat :stat="{icon:{src: '/images/SVGs/NCRAD__head_blue.svg', alt: 'Alt text'},
    numbers:'1000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link:{url: '/about', title: 'Learn More'}}"
/>
```
