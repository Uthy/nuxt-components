import { mount } from "@vue/test-utils";
import ModalDialog from "./ModalDialog.vue";

describe("ModalDialog.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(ModalDialog, {
      props: {
        modalId: "test-dialog",
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("uses the modalId prop correctly", () => {
    const modalId = "test-dialog";
    const wrapper = mount(ModalDialog, {
      props: {
        modalId,
      },
    });
    expect(wrapper.find(".rvt-dialog").attributes("id")).toBe(modalId);
    expect(wrapper.find(".rvt-dialog").attributes("data-rvt-dialog")).toBe(
      modalId,
    );
  });

  it("renders close button when closeButton prop is true", () => {
    const wrapper = mount(ModalDialog, {
      props: {
        modalId: "test-dialog",
        closeButton: true,
      },
    });
    expect(wrapper.find(".rvt-dialog__close").exists()).toBe(true);
  });

  it("does not render close button when closeButton prop is false", () => {
    const wrapper = mount(ModalDialog, {
      props: {
        modalId: "test-dialog",
        closeButton: false,
      },
    });
    expect(wrapper.find(".rvt-dialog__close").exists()).toBe(false);
  });

  it("renders default slot content correctly", () => {
    const wrapper = mount(ModalDialog, {
      props: {
        modalId: "test-dialog",
      },
    });
    expect(wrapper.find(".rvt-dialog__title").text()).toBe("Modal title");
    expect(wrapper.find(".rvt-dialog__body").text()).toBe("Dialog body");
  });

  it("renders provided slot content correctly", () => {
    const wrapper = mount(ModalDialog, {
      props: {
        modalId: "test-dialog",
      },
      slots: {
        title: "Test Title",
        body: "Test Body",
      },
    });
    expect(wrapper.find(".rvt-dialog__title").text()).toBe("Test Title");
    expect(wrapper.find(".rvt-dialog__body").text()).toBe("Test Body");
  });
});
