# Table

Table component for displaying data in a tabular format.

## Usage

- {String} size - The size of the table. Defaults to 'lg'.
- {String} title - The title of the table.
- {String} subTitle - The subtitle of the table.
- {Array<Array<String>>} headers - The headers of the table.
- {Array<Array<String>>} rows - The rows of data in the table.
- {String} tableCaption - The caption of the table.
- {Boolean} sortable - Whether the table is sortable. Defaults to false. The sort option values will be the items in the first column of the table.
- {Boolean} searchable - Whether the table is searchable. Defaults to false.
- {String} sortLabel - The label for the sort dropdown. Defaults to 'Select'.

## Usage

```
  <Table
    title="Sample Table"
    subTitle="This is a sample table"
    sortable
    searchable
    :headers="['Name', 'Age', 'Email']"
    :rows = "[
      ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
      ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
      ["Row 3 Cell 1", "Row 3 Cell 2", "Row 3 Cell 3"],
    ]";
    :sortLabel="'Select'"
    tableCaption="Caption below the table"
  />
```

## Emits

- @emits sortTable - Emitted when the sort dropdown value is changed.
- @emits search - Emitted when the search input value is changed.
  \*/
