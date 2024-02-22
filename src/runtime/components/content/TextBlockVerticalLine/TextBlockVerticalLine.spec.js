import { mount } from "@vue/test-utils";
import TextBlockVerticalLine from "./TextBlockVerticalLine.vue";

describe("TextBlockVerticalLine.vue", () => {
  test("renders title prop correctly", () => {
    const title = "Test Title";
    const wrapper = mount(TextBlockVerticalLine, {
      props: { title },
    });
    const titleElement = wrapper.find(".rvt-c-text-block-1__heading");
    expect(titleElement.text()).toBe(title);
  });

  test("renders content slot correctly", () => {
    const content = "<p>Test Content</p>";
    const wrapper = mount(TextBlockVerticalLine, {
      slots: { content: content },
    });
    const contentElement = wrapper.find(".content");
    expect(contentElement.html()).toContain(content);
  });
});
