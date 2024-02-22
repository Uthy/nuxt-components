# Tab

A component that represents a tabbed interface.

## Props

- {String} ariaLabel - The ARIA label for the tablist.
- {Array} tabs - An array of tab objects, each containing a title, selected flag, and content.

## Usage

```
 <Tab :ariaLabel="Tablist" :tabs="[
   { title: 'Tab 1', selected: true, content: 'Tab 1 content' },
   { title: 'Tab 2', selected: false, content: 'Tab 2 content' },
   { title: 'Tab 3', selected: false, content: 'Tab 3 content' }
 ]" />
```
