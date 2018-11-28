var SakFitText = require("nativescript-sak-fit-text").SakFitText;
var sakFitText = new SakFitText();

describe("greet function", function() {
    it("exists", function() {
        expect(sakFitText.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(sakFitText.greet()).toEqual("Hello, NS");
    });
});