import { mount } from "@vue/test-utils";
import TextBlockWithCard from "./TextBlockWIthCard.vue";

describe("TextBlockWithCard", () => {
  it("renders the slots correctly", () => {
    const card = "Example Actions";
    const content = "Example Content";
    const wrapper = mount(TextBlockWithCard, {
      slots: {
        card: card,
        content: content,
      },
    });

    expect(wrapper.text()).toContain(card);
    expect(wrapper.text()).toContain(content);
  });
});
