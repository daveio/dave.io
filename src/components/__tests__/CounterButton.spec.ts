import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CounterButton from "../CounterButton.vue";

describe("Counter Button", () => {
	it("renders properly", () => {
		const wrapper = mount(CounterButton, { props: { msg: "Hello Vitest" } });
		expect(wrapper.text()).toContain("Hello Vitest");
	});
});
