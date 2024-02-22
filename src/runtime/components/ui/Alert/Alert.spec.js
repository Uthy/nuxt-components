import { mount } from "@vue/test-utils";
import Alert from "./Alert.vue";

describe("Alert.vue", () => {
  test("renders variant, title, message, and dismissable props correctly", () => {
    const variant = "success";
    const title = "Test Title";
    const message = "Test Message";
    const dismissable = true;

    const wrapper = mount(Alert, {
      props: { variant, title, message, dismissable },
    });

    expect(wrapper.classes()).toContain(`rvt-alert--${variant}`);
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(message);
    expect(wrapper.find("button").exists()).toBe(dismissable);
  });

  test("does not render dismiss button when dismissable is false", () => {
    const dismissable = false;

    const wrapper = mount(Alert, {
      props: { dismissable },
    });

    expect(wrapper.find("button").exists()).toBe(dismissable);
  });
});
