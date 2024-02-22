# Publications

Component for displaying a list of publications. It takes an array of publications and includes search and sort features as well as pagination. With ability to sort by Title, Author, Journal and Year.

## Props

- pubs: An array of publication objects
- perPage: The number of publications to show per page (for pagination, default is 5)

## Pagination

Pagination will only be shown if the total number of pubs is higher than the perPage provided.

## Usage

`<Publications :pubs="PublicationsArray" :perPage="10"/>`
