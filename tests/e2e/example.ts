describe("My First Test", () => {
	before((browser) => {
		browser.init();
	});

	it("visits the app root url", () => {
		browser.assert.textContains(".green", "You did it!");
	});

	after((browser) => browser.end());
});
