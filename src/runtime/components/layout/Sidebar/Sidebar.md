# Sidebar

Sidebar component for the layout. Best used as the first child of the LayoutWrapper component

## Usage

```
<Sidebar
  sideBarTitle="Sidebar Title"
  :navItems="[
    {
      title: 'Home',
      url: '/',
      children: [
        {
          title: 'Sub Home 1',
          url: '/sub-home1',
          children: [
            {
              title: 'Sub Home 1.1',
              url: '/sub-home1-1',
            },
            {
              title: 'Sub Home 1.2',
              url: '/sub-home1-2',
              external: true
            },
          ],
        },
        {
          title: 'Sub Home 2',
          url: '/sub-home2',
        },
      ],
    },
    {
      title: 'About',
      url: '/about',
    },
  ]"
/>
```
