import { mount } from "@vue/test-utils";
import Tab from "./Tab.vue";

describe("Tab.vue", () => {
  test("renders ariaLabel prop correctly", () => {
    const ariaLabel = "Test Aria Label";

    const wrapper = mount(Tab, {
      props: { ariaLabel, tabs: [] },
    });

    expect(wrapper.find('[role="tablist"]').attributes("aria-label")).toBe(
      ariaLabel,
    );
  });

  test("renders tabs and their panels based on tabs prop", () => {
    const tabs = [
      {
        title: "Test Title 1",
        selected: true,
        content: "Test Content 1",
      },
      {
        title: "Test Title 2",
        content: "Test Content 2",
      },
    ];

    const wrapper = mount(Tab, {
      props: { tabs },
    });

    const tabButtons = wrapper.findAll(".rvt-tabs__tab");
    const tabPanels = wrapper.findAll(".rvt-tabs__panel");

    expect(tabButtons.length).toBe(tabs.length);
    expect(tabPanels.length).toBe(tabs.length);
    tabs.forEach((tab, index) => {
      expect(tabButtons[index].text()).toBe(tab.title);
      expect(tabPanels[index].html()).toContain(tab.content);
      expect(tabPanels[index].attributes("data-rvt-tab-init")).toBe(
        tab.selected ? "true" : "",
      );
    });
  });
});
