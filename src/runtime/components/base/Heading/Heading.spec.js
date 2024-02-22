import { mount } from "@vue/test-utils";
import Heading from "./Heading.vue";

describe("Heading.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Heading);
    expect(wrapper.vm).toBeTruthy();
  });

  test("sets default props correctly", () => {
    const wrapper = mount(Heading);
    expect(wrapper.props().text).toBe("");
    expect(wrapper.props().level).toBe(1);
  });

  test("renders correct heading level", () => {
    const wrapper = mount(Heading, {
      props: {
        level: 2,
        text: "Test Heading",
      },
    });
    expect(wrapper.find("h2").text()).toBe("Test Heading");
  });
});
