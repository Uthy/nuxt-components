import { mount, shallowMount } from "@vue/test-utils";
import Hero from "./Hero.vue";

describe("Hero.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Hero, {
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test("sets default props correctly", () => {
    const wrapper = shallowMount(Hero, {
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.props().background).toBe("");
    expect(wrapper.props().cta).toEqual({
      text: "",
      link: "",
      external: false,
      variant: "",
    });
  });

  test("renders contentTitle prop if provided", () => {
    const contentTitle = "Test Content Title";
    const wrapper = mount(Hero, {
      props: {
        contentTitle: contentTitle,
      },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.find(".rvt-hero__title").text()).toBe(contentTitle);
  });

  test("renders background prop if provided", () => {
    const background = "https://via.placeholder.com/150";
    const wrapper = mount(Hero, {
      props: {
        background: background,
      },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.find(".rvt-hero").attributes().style).toContain(
      `background-image: url(${background})`,
    );
  });
});
