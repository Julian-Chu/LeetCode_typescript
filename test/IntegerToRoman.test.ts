import integerToRoman from '../src/integerToRoman';

describe("convert to single Alphabet",()=>{
  it("give 1 return I", ()=>{
    expect(integerToRoman(1)).toBe("I");
  });

  it("give 5 return V",()=>{
    expect(integerToRoman(5)).toBe("V");
  });
})