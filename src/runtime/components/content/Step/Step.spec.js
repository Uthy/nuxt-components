import { mount } from "@vue/test-utils";
import Step from "./Step.vue";

describe("Step.vue", () => {
  test("renders step prop correctly", () => {
    const step = "2";
    const wrapper = mount(Step, {
      props: { step },
    });
    const stepElement = wrapper.find(".step-number");
    expect(stepElement.text()).toBe(step);
  });

  test("renders slot content correctly", () => {
    const slotContent = "Test Slot Content";
    const wrapper = mount(Step, {
      props: { step: "2" },
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.text()).toContain(slotContent);
  });
});
