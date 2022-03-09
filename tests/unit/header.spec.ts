import { shallowMount } from "@vue/test-utils";
import { Theme, ThemeColor } from "@/types";
import Header from "@/components/Header.vue";

const props = {
  default: {
    theme: "light" as Theme,
    themeColor: "green" as ThemeColor,
  },
};
const mockTextCommand = jest
  .spyOn(Header.methods as any, "textCommand")
  .mockImplementation(() => true);

describe("Header.vue", () => {
  // clear mock calls after each test
  afterEach(() => mockTextCommand.mockClear());

  it("calls textCommand on clicking Bold button", async () => {
    // mount Header
    const wrapper = shallowMount(Header, {
      props: props.default,
    });

    // click Bold button
    wrapper.find("#btn-bold").trigger("click");

    // expect call
    expect(mockTextCommand).toHaveBeenCalledWith("bold");
  });

  it("calls textCommand on clicking Italic button", async () => {
    // mount Header
    const wrapper = shallowMount(Header, {
      props: props.default,
    });

    // click Italic button
    wrapper.find("#btn-italic").trigger("click");

    // expect call
    expect(mockTextCommand).toHaveBeenCalledWith("italic");
  });
});
