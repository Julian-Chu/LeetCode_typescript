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

describe("give target < 9", ()=>{
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

describe("give target < 90",()=>{
  it("give 9, return IX",()=>{
    expect(integerToRoman(9)).toBe("IX");
  })
  it("give 11, return XI",()=>{
    expect(integerToRoman(11)).toBe("XI");
  })
  it("give 89, return LXXXIX",()=>{
    expect(integerToRoman(89)).toBe("LXXXIX");
  })
})

describe("give target for digit in thousand place", ()=>{
  it("give 3000, return M", ()=>{
    expect(integerToRoman(3000)).toBe("MMM");
  });

  it("give 1000, return M", ()=>{
    expect(integerToRoman(1000)).toBe("M");
  })
})

describe("give target for digit in hundred place",()=>{
  it("give 900, return CM", ()=>{
    expect(integerToRoman(900)).toBe("CM");
  });

  it("give 700, return DCC", ()=>{
    expect(integerToRoman(700)).toBe("DCC");
  });

  it("give 400, return CD",()=>{
    expect(integerToRoman(400)).toBe("CD");
  });

  it("give 300, return CCC", ()=>{
    expect(integerToRoman(300)).toBe("CCC");
  });
})


