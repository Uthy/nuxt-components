# Samples Component

Component for displaying multiple SampleBlocks.

## Props

- {string} title - The title of the section.
- {boolean} filterable - Determines if the list will be filterable (default is true).
- {array} studies - array of studies and their available samples

## Data

- {Array} studies - The available sample types for filtering.

## Component

SampleBlock - The component for displaying a single study block with availabl samples.

## Usage

`<Samples :title="Available Samples" filterable="false" :studies="studiesArray"/>`
