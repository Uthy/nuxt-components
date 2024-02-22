import { mount } from "@vue/test-utils";
import SampleBlock from "./SampleBlock.vue";

describe("SampleBlock.vue", () => {
  const study = {
    studyName: "Test Study Name",
    description: "Test Description",
    url: "https://example.com",
    samples: ["Sample 1", "Sample 2", "Sample 3"],
  };

  test("renders studyName correctly", () => {
    const wrapper = mount(SampleBlock, {
      props: { study },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    const linkElement = wrapper.find(".rvt-cta");
    expect(linkElement.text()).toBe(study.studyName);
  });

  test("renders description correctly", () => {
    const wrapper = mount(SampleBlock, {
      props: { study },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    const descriptionElement = wrapper.find(".sample-details div");
    expect(descriptionElement.text()).toBe(study.description);
  });

  test("renders url correctly", () => {
    const wrapper = mount(SampleBlock, {
      props: { study },
    });
    const linkElement = wrapper.find(".rvt-cta");
    expect(linkElement.attributes("to")).toBe(study.url);
  });

  test("renders samples correctly", () => {
    const wrapper = mount(SampleBlock, {
      props: { study },
    });
    const sampleElements = wrapper.findAll(".capsule");
    expect(sampleElements.length).toBe(study.samples.length);
    sampleElements.forEach((sampleElement, index) => {
      expect(sampleElement.text()).toBe(study.samples[index]);
    });
  });
});
