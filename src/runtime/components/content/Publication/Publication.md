# Publication

Component for displaying publication details.

## Usage

`<Publication :pub="publicationData" />`

## Props

- {Object} pub: The publication object containing the publication details.
- {string} pub.journal: The name of the journal.
- {string} pub.title: The title of the publication.
- {string} pub.author: The author(s) of the publication.
- {number} pub.year: The year of publication.
- {number} pub.volume: The volume number of the publication.
- {number} pub.issue: The issue number of the publication.
- {string} pub.pages: The page numbers of the publication.
- {Object} pub.link: The link object containing the publication link details.
- {string} pub.link.href: The URL of the publication link.
- {boolean} pub.link.external: Indicates if the publication link is external.
- {string} pub.link.text: The text to display for the publication link.
