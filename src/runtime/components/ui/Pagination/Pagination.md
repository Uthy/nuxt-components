# Pagination

Pagination component for navigating through multiple items.

## Props

- {Number} currentPage - The current page number.
- {Number} totalPages - The total number of pages.

## Emits

- update:currentPage - Event emitted when the current page is changed.

## Usage

```
<Pagination :currentPage="2" :totalPages="5" @update:currentPage="handlePageChange" />
```
