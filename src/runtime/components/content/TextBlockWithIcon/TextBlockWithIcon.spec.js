import { mount } from "@vue/test-utils";
import TextBlockWithIcon from "./TextBlockWithIcon.vue";

describe("TextBlockWithIcon", () => {
  it("renders correctly", () => {
    const wrapper = mount(TextBlockWithIcon, {
      global: {
        stubs: {
          NuxtImg: {
            template: "<img />",
            props: ["src", "alt"],
          },
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders with reversed class", () => {
    const wrapper = mount(TextBlockWithIcon, {
      props: {
        reversed: true,
      },
      global: {
        stubs: {
          NuxtImg: {
            template: "<img />",
            props: ["src", "alt"],
          },
        },
      },
    });
    expect(wrapper.classes()).toContain("rvt-billboard--reverse");
  });
});
