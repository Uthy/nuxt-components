import { mount } from "@vue/test-utils";
import Pagination from "./Pagination.vue";

describe("Pagination.vue", () => {
  test("renders first and previous page buttons only when currentPage is greater than 1", () => {
    const currentPage = 1;
    const totalPages = 5;

    const wrapper = mount(Pagination, {
      props: { currentPage, totalPages },
    });

    const firstButton = wrapper.find('[aria-label="Go to first page"]');
    const previousButton = wrapper.find('[aria-label="Go to previous page"]');

    expect(firstButton.exists()).toBe(currentPage > 1);
    expect(previousButton.exists()).toBe(currentPage > 1);
  });

  test("renders next and last page buttons only when currentPage is less than totalPages", () => {
    const currentPage = 5;
    const totalPages = 5;

    const wrapper = mount(Pagination, {
      props: { currentPage, totalPages },
    });

    const nextButton = wrapper.find('[aria-label="Go to next page"]');
    const lastButton = wrapper.find('[aria-label="Go to last page"]');

    expect(nextButton.exists()).toBe(currentPage < totalPages);
    expect(lastButton.exists()).toBe(currentPage < totalPages);
  });

  test("renders correct number of page buttons", () => {
    const currentPage = 1;
    const totalPages = 5;

    const wrapper = mount(Pagination, {
      props: { currentPage, totalPages },
    });

    const pageButtons = wrapper.findAll('[aria-label^="Page "]');

    expect(pageButtons.length).toBe(totalPages);
  });

  test("clicking a page button emits update:currentPage event with correct page number", async () => {
    const currentPage = 1;
    const totalPages = 5;

    const wrapper = mount(Pagination, {
      props: { currentPage, totalPages },
    });

    const pageButtons = wrapper.findAll('[aria-label^="Page "]');
    await pageButtons[1].trigger("click");

    expect(wrapper.emitted()).toHaveProperty("update:currentPage");
    expect(wrapper.emitted()["update:currentPage"][0]).toEqual([2]);
  });
});
