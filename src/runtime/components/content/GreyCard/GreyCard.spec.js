import { mount } from "@vue/test-utils";
import GreyCard from "./GreyCard.vue";

describe("GreyCard.vue", () => {
  it("renders slot content when passed", () => {
    const slotContent = "Hello, World!";
    const wrapper = mount(GreyCard, {
      slots: {
        default: slotContent,
      },
    });

    expect(wrapper.text()).toContain(slotContent);
  });
});
