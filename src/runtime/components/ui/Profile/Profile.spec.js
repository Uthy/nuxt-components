import { mount } from "@vue/test-utils";
import Profile from "./Profile.vue";

describe("Profile.vue", () => {
  test("renders name, description, image, and stacked props correctly", () => {
    const name = "Test Name";
    const description = "Test Description";
    const image = { url: "test-url", alt: "test-alt" };
    const stacked = true;

    const wrapper = mount(Profile, {
      props: { name, description, image, stacked },
      global: {
        stubs: {
          NuxtImg: {
            template: "<img />",
            props: ["src", "alt"],
          },
        },
      },
    });

    expect(wrapper.text()).toContain(name);
    expect(wrapper.text()).toContain(description);
    expect(wrapper.classes()).toContain(stacked ? "stacked" : "");
  });
});
