import { mount } from "@vue/test-utils";
import GradientContainer from "./GradientContainer.vue";

describe("GradientContainer.vue", () => {
  test("type prop correctly adds class to root element", () => {
    const type = "gradient";
    const wrapper = mount(GradientContainer, {
      props: { type },
    });
    const rootElement = wrapper.find("div");
    expect(rootElement.classes()).toContain(type);
  });

  test("renders default slot correctly", () => {
    const slotContent = "Test Slot Content";
    const wrapper = mount(GradientContainer, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.text()).toContain(slotContent);
  });
});
