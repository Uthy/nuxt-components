import { mount } from "@vue/test-utils";
import Timeline from "./Timeline.vue";

describe("Timeline.vue", () => {
  test("renders timeline items based on timeline prop", () => {
    const timeline = [
      {
        dates: "Test Dates 1",
        title: "Test Title 1",
        description: "Test Paragraph 1",
      },
      {
        dates: "Test Dates 2",
        title: "Test Title 2",
        description: "Test Paragraph 2",
      },
    ];

    const wrapper = mount(Timeline, {
      props: { timeline },
    });

    const items = wrapper.findAll(".rvt-timeline__item");

    expect(items.length).toBe(timeline.length);
    timeline.forEach((item, index) => {
      const itemWrapper = items[index];
      expect(itemWrapper.find(".rvt-timeline__date").text()).toBe(item.dates);
      expect(itemWrapper.find(".rvt-timeline__heading").text()).toBe(
        item.title,
      );
      expect(itemWrapper.find("p").text()).toBe(item.description);
    });
  });
});
