import { mount } from "@vue/test-utils";
import TextBlockGreyCard from "./TextBlockGreyCard.vue";

describe("TextBlockGreyCard.vue", () => {
  test("renders left slot correctly", () => {
    const leftSlotContent = "Left Slot Content";
    const wrapper = mount(TextBlockGreyCard, {
      slots: {
        left: leftSlotContent,
      },
    });
    const leftSlotElement = wrapper.find(".rvt-billboard__body");
    expect(leftSlotElement.text()).toBe(leftSlotContent);
  });

  test("renders right slot correctly", () => {
    const rightSlotContent = "Right Slot Content";
    const wrapper = mount(TextBlockGreyCard, {
      slots: {
        right: rightSlotContent,
      },
    });
    const rightSlotElement = wrapper.find(".rvt-c-featured");
    expect(rightSlotElement.text()).toBe(rightSlotContent);
  });
});
