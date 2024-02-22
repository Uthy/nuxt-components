<template>
  <div>
    <div
      v-if="title"
      class="table-header rvt-p-all-md rvt-bg-white rvt-border-all"
    >
      <div class="title">
        <div
          class="rvt-text-uppercase rvt-color-black-500 rvt-text-regular rvt-ts-16 h4"
        >
          {{ title }}
        </div>
      </div>

      <div class="rvt-c-flex">
        <div
          class="subtitle rvt-text-uppercase rvt-color-black-500 rvt-ts-16 w-100 h5"
        >
          {{ subTitle }}
        </div>
        <div
          v-if="sortable"
          class="filtering rvt-flex rvt-ts-xs rvt-items-center rvt-grow-1 w-100"
        >
          <div class="sort rvt-flex rvt-items-center rvt-grow-1 w-100">
            <label
              for="sort-by"
              class="rvt-label rvt-text-uppercase ncrad-blue rvt-text-medium"
              >Sort By:
            </label>
            <select
              id="sort-by"
              v-model="selectLabel"
              class="rvt-select rvt-c-select w-50"
              @change="sortTable"
            >
              <option disabled :value="sortLabel">{{ sortLabel }}</option>
              <option
                v-for="(value, index) in columnValues"
                :key="index"
                :value="value"
              >
                {{ value }}
              </option>
            </select>
          </div>
          <div v-if="searchable" class="search">
            <label for="search" class="rvt-label rvt-sr-only">Search</label>
            <input
              id="search"
              type="text"
              placeholder="Search"
              class="rvt-text-input rvt-c-input"
              @input="search"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      role="region"
      tabindex="0"
      class="rvt-table-responsive"
      aria-labelledby="responsive-table"
    >
      <table class="rvt-table rvt-table-cells rvt-table-stripes">
        <caption class="rvt-sr-only">
          {{
            tableCaption ? tableCaption : title
          }}
        </caption>
        <thead class="table-header">
          <tr>
            <th
              v-for="(header, index) in headers"
              :key="index"
              scope="col"
              class="rvt-text-uppercase rvt-ts-xxs rvt-text-medium"
              v-html="header"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in localRows" :key="rowIndex">
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              :scope="cellIndex === 0 ? 'row' : undefined"
              class="rvt-ts-xs rvt-text-regular"
              v-html="cell"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="tableCaption" class="rvt-ts-xs rvt-p-all-sm">
      {{ tableCaption }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
const selectedSortValue = ref("");

const props = defineProps({
  size: {
    type: String,
    default: "lg",
  },
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  headers: {
    type: Array as () => Array<string>,
    default: () => ["Product", "Container", "Processes Included"],
  },
  rows: {
    type: Array as () => Array<Array<string>>,
    default: () => [
      ["DNA", "Plate", "Aliquot, normalize, plate, pack for shipment"],
      ["DNA", "Plate", "Aliquot, normalize, plate, pack for shipment"],
      ["Total RNA", "Aliquot", "normalize, plate, pack for shipment"],
      ["GENOME", "Aliquot", "absolute, plate, pack for shipment"],
    ],
  },
  tableCaption: {
    type: String,
    default: "",
  },
  sortable: {
    type: Boolean,
    default: false,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  sortLabel: {
    type: String,
    default: "Select",
  },
});

const selectLabel = ref(props.sortLabel);

const localRows = ref<Array<string[]>>([...props.rows]);

watchEffect(() => {
  localRows.value = [...props.rows];
});

const columnValues = computed(() => {
  const column = localRows.value.map((row) => row[0]);
  return [...new Set(column)];
});

const sortTable = (event: Event) => {
  selectLabel.value = (event.target as HTMLInputElement).value;
  selectedSortValue.value = (
    event.target as HTMLInputElement
  ).value.toLowerCase();
  const sortedRows = [...localRows.value].sort((a, b) => {
    const rowAContainsSortBy = a.some((column) =>
      column.toLowerCase().includes(selectedSortValue.value),
    );
    const rowBContainsSortBy = b.some((column) =>
      column.toLowerCase().includes(selectedSortValue.value),
    );

    if (rowAContainsSortBy && !rowBContainsSortBy) {
      return -1;
    }
    if (!rowAContainsSortBy && rowBContainsSortBy) {
      return 1;
    }
    return 0;
  });

  localRows.value = [...sortedRows];
};

const search = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const searchTerm = target.value;
  localRows.value = [
    ...props.rows.filter((row) =>
      row.some((column) =>
        column.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    ),
  ];
};
</script>

<style lang="scss" scoped>
.rvt-c-flex {
  gap: 2rem;
  display: flex;

  @media screen and (max-width: 1080px) {
    gap: 1rem;
    flex-direction: column;
  }
}

.filtering {
  gap: 1rem;
  @media screen and (max-width: 1080px) {
    align-items: flex-start !important;
  }
  @media screen and (max-width: 749px) {
    flex-direction: column;
  }
}

.sort {
  @media screen and (min-width: 1080.5px) {
    justify-content: flex-end;
  }
}

tr td {
  padding: 0.4rem 1rem;
}

tr th {
  line-height: 1.5;
  letter-spacing: 1.5px;
}

.w-50,
.search {
  @media (max-width: 749px) {
    width: 100%;
  }
}

.table-header {
  background: var(--table-header-bg);
}
</style>
