import { mount } from "@vue/test-utils";
import Stat from "./Stat.vue";

describe("Stat.vue", () => {
  test("renders stat prop correctly", () => {
    const stat = {
      icon: {
        src: "test-src",
        alt: "test-alt",
      },
      numbers: "123",
      description: "Test Description",
      link: {
        url: "test-url",
        title: "Test Title",
      },
    };

    const wrapper = mount(Stat, {
      props: { stat },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });

    const imgElement = wrapper.find("img");
    expect(imgElement.attributes("src")).toBe(stat.icon.src);
    expect(imgElement.attributes("alt")).toBe(stat.icon.alt);

    expect(wrapper.text()).toContain(stat.numbers);
    expect(wrapper.text()).toContain(stat.description);
  });
});
