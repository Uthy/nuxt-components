import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Button, {
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it("renders the correct variant class", () => {
    const variant = "secondary";
    const wrapper = mount(Button, {
      props: { variant },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.classes()).toContain(`rvt-button--${variant}`);
  });

  it("emits click event when clicked", async () => {
    const wrapper = mount(Button, {
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it("renders label prop if provided", () => {
    const label = "Button Label";
    const wrapper = mount(Button, {
      props: { label },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.text()).toContain(label);
  });

  it("renders slot content", () => {
    const content = "Click me";
    const wrapper = mount(Button, {
      slots: { default: content },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.text()).toContain(content);
  });
});
