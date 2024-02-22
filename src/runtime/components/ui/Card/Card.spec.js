import { mount } from "@vue/test-utils";
import Card from "./Card.vue";

describe("Card.vue", () => {
  test("renders image, title, and horizontal props correctly", () => {
    const image = { src: "test-src", alt: "test-alt" };
    const title = "Test Title";
    const horizontal = true;

    const wrapper = mount(Card, {
      props: { image, title, horizontal },
      global: {
        stubs: {
          NuxtImg: {
            template: "<img />",
            props: ["src", "alt"],
          },
        },
      },
    });

    expect(wrapper.text()).toContain(title);
    expect(wrapper.classes()).toContain(
      horizontal ? "rvt-card--horizontal" : "",
    );
  });

  test("renders meta slot correctly", () => {
    const slotContent = "Test Slot Content";
    const wrapper = mount(Card, {
      slots: {
        meta: slotContent,
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
    expect(wrapper.text()).toContain(slotContent);
  });
});
