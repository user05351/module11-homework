
import {countDown} from "../countDown.js";

describe("Tests for countDown function", () => {
    it("A value must be entered", () => {
        expect(countDown()).toBe(undefined);
    }),
    it("Only a whole number must be entered", () => {
        expect(countDown(6)).toBe("6 5 4 3 2 1 ");
    }),
    it("Number must not be less than or equal to 0", () => {
        expect(countDown(0)).toBe(console.log("Число не должно быть меньше или равным нулю"));
    })
});
