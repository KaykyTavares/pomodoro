function sum(a: number, b: number): number {
    return a + b;
}

describe("teste", () => {
    it(" Must retunr a number", () => {
        expect(sum(2, 2)).toBe(4)
    })
})