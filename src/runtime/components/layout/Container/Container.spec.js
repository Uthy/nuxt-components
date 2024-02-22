import { mount } from "@vue/test-utils";
import Container from "./Container.vue";

describe("Container.vue", () => {
  test("size prop correctly adds class to root element", () => {
    const size = "lg";
    const wrapper = mount(Container, {
      props: { size },
    });
    const rootElement = wrapper.find("div");
    expect(rootElement.classes()).toContain(`rvt-container-${size}`);
  });

  test("renders default slot correctly", () => {
    const slotContent = "Test Slot Content";
    const wrapper = mount(Container, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.text()).toContain(slotContent);
  });
});
