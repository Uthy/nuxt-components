# Hero

Component for displaying a hero section with an optional background image and content.

## Props:

- background: The URL of the background image.
- overlayTitle: The title to display as an overlay on the hero section.
- contentTitle: The title to display in the content section (used as alternative to background image with overlay title).
- cta: An object representing the call-to-action button, with properties:
- variant: The variant of the button (e.g., "primary", "secondary").
- link: The URL to navigate to when the button is clicked.
- external: Boolean indicating whether the link should open in a new tab.

## Slots:

- content: The content to display in the content section.

## Example usage:

```
    <Hero
        background="/path/to/background.jpg"
        overlayTitle="Welcome to NCRAD"
        :cta="{ text: 'Learn More', variant: 'primary', link: '/about', external: false }">
        <template #content>
            <p>Here is some content about us.</p>
        </template>
    </Hero>
```

## Usage in NuxtContent .md file

```
::Hero{background="/path/to/background.jpg" overlayTitle="Welcome to NCRAD"}

#content
<p>html content</p>

::
```
