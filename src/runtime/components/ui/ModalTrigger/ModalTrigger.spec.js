import { mount } from "@vue/test-utils";
import ModalTrigger from "./ModalTrigger.vue";

describe("ModalTrigger.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(ModalTrigger, {
      props: {
        targetModal: "test-dialog",
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("uses the targetModal prop correctly", () => {
    const targetModal = "test-dialog";
    const wrapper = mount(ModalTrigger, {
      props: {
        targetModal,
      },
    });
    expect(wrapper.find("button").attributes("data-rvt-dialog-trigger")).toBe(
      targetModal,
    );
  });

  it("renders default slot content correctly", () => {
    const wrapper = mount(ModalTrigger, {
      props: {
        targetModal: "test-dialog",
      },
      slots: {
        trigger: "Open Dialog",
      },
    });
    expect(wrapper.find("button").text()).toBe("Open Dialog");
  });
});
