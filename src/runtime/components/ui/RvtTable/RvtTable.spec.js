import { mount } from "@vue/test-utils";
import RvtTable from "./RvtTable.vue";

describe("RvtTable", () => {
  it("renders the correct title", () => {
    const title = "Table title";
    const wrapper = mount(RvtTable, {
      props: {
        title: title,
        subTitle: "",
        headers: [],
        rows: [],
        RvtTableCaption: "",
        sorRvtTable: false,
        searchable: false,
        sortLabel: "Select",
      },
    });

    expect(wrapper.find(".title > div").text()).toBe(title);
  });

  it("renders the correct number of headers", () => {
    const headers = ["Header 1", "Header 2", "Header 3"];
    const wrapper = mount(RvtTable, {
      props: {
        title: "",
        subTitle: "",
        headers: headers,
        rows: [],
        RvtTableCaption: "",
        sorRvtTable: false,
        searchable: false,
        sortLabel: "Select",
      },
    });

    expect(wrapper.findAll("th").length).toBe(headers.length);
  });

  it("renders the correct number of rows", () => {
    const headers = ["Header 1", "Header 2", "Header 3"];
    const rows = [
      ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
      ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
      ["Row 3 Cell 1", "Row 3 Cell 2", "Row 3 Cell 3"],
    ];
    const wrapper = mount(RvtTable, {
      props: {
        title: "",
        subTitle: "",
        headers: headers,
        rows: rows,
        RvtTableCaption: "",
        sorRvtTable: false,
        searchable: false,
        sortLabel: "Select",
      },
    });

    expect(wrapper.findAll("tbody > tr").length).toBe(rows.length);
  });
});
