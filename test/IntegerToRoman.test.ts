import integerToRoman from '../src/integerToRoman';

describe("convert to single Alphabet",()=>{
  it("give 1 return I", ()=>{
    expect(integerToRoman(1)).toBe("I");
  });

  it("give 5 return V",()=>{
    expect(integerToRoman(5)).toBe("V");
  });

  it("give 10 return X",()=>{
    expect(integerToRoman(10)).toBe("X");
  });

  it("give 50 return L",()=>{
    expect(integerToRoman(50)).toBe("L");
  })

  it("give 100 return C", ()=>{
    expect(integerToRoman(100)).toBe("C");
  });

  it("give 500 return D",()=>{
    expect(integerToRoman(500)).toBe("D");
  });

  it("give 1000 return M",()=>{
    expect(integerToRoman(1000)).toBe("M");
  })

})

describe("give target < 10", ()=>{
  it("give 3, return III", ()=>{
    expect(integerToRoman(3)).toBe("III");
  })
  it("give 4, return IV", ()=>{
    expect(integerToRoman(4)).toBe("IV");
  })
  it("give 8, return VIII", ()=>{
    expect(integerToRoman(8)).toBe("VIII");
  })

  
})