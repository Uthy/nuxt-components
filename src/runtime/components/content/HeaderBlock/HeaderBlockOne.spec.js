import { mount } from "@vue/test-utils";
import HeaderBlockOne from "./HeaderBlockOne.vue";

describe("HeaderBlockOne.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(HeaderBlockOne);
    expect(wrapper.vm).toBeTruthy();
  });

  test("sets default props correctly", () => {
    const wrapper = mount(HeaderBlockOne);
    expect(wrapper.props().title).toBe("Page title. Prop: {{ title }}");
  });

  test("renders title prop if provided", () => {
    const title = "Test Title";
    const wrapper = mount(HeaderBlockOne, {
      props: {
        title: title,
      },
    });
    expect(wrapper.find("h1").text()).toBe(title);
  });

  test("renders slot content", () => {
    const content = "Test Content";
    const wrapper = mount(HeaderBlockOne, {
      slots: {
        default: content,
      },
    });
    expect(wrapper.text()).toContain(content);
  });
});
