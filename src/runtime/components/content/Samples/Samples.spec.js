import { mount } from "@vue/test-utils";
import Samples from "./Samples.vue";
import SampleBlock from "../SampleBlock/SampleBlock.vue";

describe("Samples.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Samples, {
      propsData: {
        title: "Test Title",
        filterable: true,
        studies: [
          {
            studyName: "Test Study",
            description: "Test Description",
            samples: ["Test Sample"],
            url: "test/url",
          },
        ],
      },
      global: {
        components: {
          SampleBlock,
        },
      },
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("renders the title prop correctly", () => {
    expect(wrapper.find(".title").text()).toBe("Test Title");
  });

  it("renders the filterable prop correctly", () => {
    expect(wrapper.find("#filter").exists()).toBe(true);
  });

  it("renders the studies prop correctly", () => {
    expect(wrapper.findComponent(SampleBlock).exists()).toBe(true);
  });

  it("filters studies correctly", async () => {
    await wrapper.find("#filter").setValue("Test Sample");
    expect(wrapper.vm.filteredStudies).toEqual([
      {
        studyName: "Test Study",
        description: "Test Description",
        samples: ["Test Sample"],
        url: "test/url",
      },
    ]);
  });
});
