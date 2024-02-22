import { mount } from "@vue/test-utils";
import Breadcrumbs from "./Breadcrumbs.vue";

describe("Breadcrumbs.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Breadcrumbs, {
      props: {
        pagePaths: ["Home", "Two", "Three"],
      },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders the breadcrumbs correctly", () => {
    const breadcrumbs = wrapper.findAll(".breadcrumb-li");
    expect(breadcrumbs.length).toBe(3);
  });
});
