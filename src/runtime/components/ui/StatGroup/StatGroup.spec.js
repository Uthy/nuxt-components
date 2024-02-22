import { mount } from "@vue/test-utils";
import StatGroup from "./StatGroup.vue";

describe("StatGroup.vue", () => {
  test("renders slot correctly", () => {
    const slotContent = "Test Slot Content";

    const wrapper = mount(StatGroup, {
      slots: {
        default: slotContent,
      },
    });

    expect(wrapper.text()).toContain(slotContent);
  });
});
