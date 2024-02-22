import { mount } from "@vue/test-utils";
import Accordion from "./Accordion.vue";

describe("Accordion", () => {
  it("renders correctly", () => {
    const items = [
      { title: "Accordion Title", content: "<p>Accoridon Content</p>" },
      { title: "Accordion Title 2", content: "Accoridon Content 2" },
    ];

    const wrapper = mount(Accordion, {
      props: { items },
    });

    const panels = wrapper.findAll(".rvt-accordion__panel");
    panels.forEach((panel, index) => {
      const htmlContent = panel.html();
      expect(htmlContent).toContain(items[index].content);
    });
  });
});
