import { mount, shallowMount } from "@vue/test-utils";
import HeaderBlockTwo from "./HeaderBlockTwo.vue";

describe("HeaderBlockTwo.vue", () => {
  it("renders props.title when passed", () => {
    const title = "Test Title";
    const wrapper = shallowMount(HeaderBlockTwo, {
      props: {
        title: title,
      },
      global: {
        stubs: {
          NuxtImg: true,
        },
      },
    });

    expect(wrapper.text()).toContain(title);
  });
});
