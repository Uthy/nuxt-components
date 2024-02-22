import { mount } from "@vue/test-utils";
import Footer from "./Footer.vue";

describe("Footer.vue", () => {
  test("renders props correctly", () => {
    const quickLinks = [{ title: "Test Title 1", url: "/test-url-1" }];
    const siteMap = [{ title: "Test Title 2", url: "/test-url-2" }];
    const contact = {
      email: "test@test.com",
      phone: "1234567890",
      location: "Test Location",
    };
    const hours = "Test Hours";
    const footerText = "Test Footer Text";
    const footerBaseLinks = [{ title: "Test Title 3", url: "/test-url-3" }];

    const wrapper = mount(Footer, {
      props: {
        quickLinks,
        siteMap,
        contact,
        hours,
        footerText,
        footerBaseLinks,
      },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });

    // Check quickLinks
    const quickLinksItems = wrapper.findAll(".quick-links .rvt-button");
    expect(quickLinksItems.length).toBe(quickLinks.length);
    quickLinks.forEach((link, index) => {
      const linkWrapper = quickLinksItems[index];
      expect(linkWrapper.attributes("to")).toBe(link.url);
    });

    // Check siteMap
    const siteMapItems = wrapper.findAll(".site-map .site-map-link");
    expect(siteMapItems.length).toBe(siteMap.length);
    siteMap.forEach((link, index) => {
      const linkWrapper = siteMapItems[index];
      expect(linkWrapper.attributes("to")).toBe(link.url);
    });

    // Check contact
    expect(wrapper.find('.contact [href^="mailto:"]').text()).toBe(
      contact.email,
    );
    expect(wrapper.find('.contact [href^="tel:"]').text()).toBe(contact.phone);
    expect(wrapper.find(".location span").html()).toContain(contact.location);

    // Check hours
    expect(wrapper.find(".hours div").html()).toContain(hours);

    // Check footerText
    expect(wrapper.find(".footer-text p").text()).toBe(footerText);
  });
});
