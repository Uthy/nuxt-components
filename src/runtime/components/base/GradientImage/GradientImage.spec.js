import { mount } from "@vue/test-utils";
import GradientImage from "./GradientImage.vue";

describe("GradientImage.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(GradientImage, {
      global: {
        stubs: {
          NuxtImg: true,
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test("sets default props correctly", () => {
    const wrapper = mount(GradientImage, {
      global: {
        stubs: {
          NuxtImg: true,
        },
      },
    });
    expect(wrapper.props().gradientType).toBe("gradient");
    expect(wrapper.props().image).toEqual({
      src: "https://www.iu.edu/images/home/brand-campaign/homepage-overview-ai.webp",
      alt: "Gradient Image Alt Text",
    });
  });
});
