# Footer Component

This component displays the footer section of the site, including additional resources, quick links, site map, contact information, hours, and footer base links.

## Usage

```
<Footer
  :quickLinks="[
    { title: 'Sample Types We Bank', url: '/sample-types' }
  ]"
  :siteMap="[
    { title: 'About', url: '/about' },
    { title: 'Services We Offer', url: '/services' }
  ]"
  :contact="{
    email: 'alszstudy@iu.edu',
    phone: '800-526-2839',
    location: 'NCRAD <br/> Indiana University School of Medicine <br/> 351 W. 10th St TK-217 <br/> Indianapolis, IN 46202'
  }"
  :hours="'<p><strong>Monday through Friday: </strong>8 a.m to 5 p.m </p>'"
  footerText="NCRAD is grateful for the invaluable support it receives from the National Institute on Aging (NIA) under a cooperative grant (U24 AG021886)"
  :footerBaseLinks="[
    { title: 'Disclaimer', url: '/disclaimer' },
    { title: 'Privacy Notice', url: '/privacy' }
  ]"
/>
```
