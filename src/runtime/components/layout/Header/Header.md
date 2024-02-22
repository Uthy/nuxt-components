# Header

This component represents the header section of the layout. It includes a global navigation menu, a logo, and a mobile menu.

## Props

- size: The size of the header container. It determines the width of the header. Possible values are 'sm', 'md', 'lg', 'xl', 'xxl'.
- centered: This flag is false by default, but it justifies the main menu to the center.
- allowSearch: A booloean flag to show the Search button that triggers search bar on the header.

## Data:

- logo: An object containing the desktop and mobile logo information. Each logo has a 'src' and 'alt' attribute.

Computed Properties:

- topMenu: An array of objects representing the items in the top navigation menu.
- mainMenu: An array of objects representing the items in the main navigation menu.
