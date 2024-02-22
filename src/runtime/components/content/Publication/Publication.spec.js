import { mount } from "@vue/test-utils";
import Publication from "./Publication.vue";

describe("Publication.vue", () => {
  test("renders all props if provided", () => {
    const pub = {
      title: "Test Title",
      author: "Test Author",
      journal: "Test Journal",
      year: "2022",
      link: {
        text: "Test Link Text",
        href: "https://example.com",
        external: true,
      },
      abstract: "Test Abstract",
      issue: "Test Issue",
      pages: "Test Pages",
      volume: "Test Volume",
    };
    const wrapper = mount(Publication, {
      props: {
        pub: pub,
      },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    expect(wrapper.text()).toContain(pub.title);
    expect(wrapper.text()).toContain(pub.author);
    expect(wrapper.text()).toContain(pub.journal);
    expect(wrapper.text()).toContain(pub.year);
    expect(wrapper.text()).toContain(pub.abstract);
    expect(wrapper.text()).toContain(pub.issue);
    expect(wrapper.text()).toContain(pub.pages);
    expect(wrapper.text()).toContain(pub.volume);
    const linkElement = wrapper.find(".rvt-cta");
    expect(linkElement.attributes("to")).toBe(pub.link.href);
    expect(linkElement.attributes("target")).toBe(
      pub.link.external ? "_blank" : "_self",
    );
  });
});
