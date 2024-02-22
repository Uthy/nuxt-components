# Profile

Component for displaying a profile with name, description, and image.

## Props

- name {String}
- description {String} - Description to go below the name
- image {Object} - The Profile Image Object containing the src and alt.
- stacked {Boolean} - To flag whether the image will always stack on top of the text content. (False by default)

## Usage

```
 * <Profile
    name="Jeff Dage, Ph.D."
    description="Senior Research Professor of Neurology and Primary Member, Stark Neurosciences Research Institute. He is a NCRAD co-investigator and is the Scientific Director of the Biomarker Assay Laboratory."
    image={{
    url: 'https://rivet.iu.edu/img/placeholder/avatar-1.webp',
    alt: 'Jeff Dage'}}
    stacked
/>
```
