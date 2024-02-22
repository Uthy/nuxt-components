import { mount } from "@vue/test-utils";
import Col from "./Column.vue";

describe("Col.vue", () => {
  test("xs, sm, md, lg, and xl props correctly add classes to root element", () => {
    const props = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 };
    const wrapper = mount(Col, {
      props,
    });
    const rootElement = wrapper.find("div");
    for (let size in props) {
      expect(rootElement.classes()).toContain(
        `rvt-cols-${props[size]}-${size}`,
      );
    }
  });

  test("renders default slot correctly", () => {
    const slotContent = "Test Slot Content";
    const wrapper = mount(Col, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.text()).toContain(slotContent);
  });
});
