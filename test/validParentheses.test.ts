import isValid from "../src/validParentheses";

describe('Test isValid()',()=>{
    it('give()', ()=>{
        expect(isValid("()")).toBe(true);
    });

    it('give(]', ()=>{
        expect(isValid("(]")).toBe(false);
    })



})