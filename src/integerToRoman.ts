function integerToRoman(integer:number):string{
  let input:number = integer;
  let result: string[] = [];
  let countOfV:number = 0;
  let countOfI:number = 0;
  let countOfIRightToV:number = 0;
  if(input < 9){
    if(input < 4){
      countOfI = input;
    }else{
      countOfV = 1
      if(input > 5){
        countOfIRightToV = input %5;
      }else{
        countOfI = 1;
      }
    }
  }

  for (let i = 0; i < countOfI; i++) {
    result.push("I");    
  }

  for(let i = 0; i < countOfV; i++){
    result.push("V");
  }

  for(let i = 0; i < countOfIRightToV; i++){
    result.push("I");
  }


  if(integer === 1)  return "I";
  if(integer === 5)  return "V";
  if(integer === 10) return "X";
  if(integer === 50) return "L";
  if(integer === 100) return "C";
  if(integer === 500) return "D";
  if(integer === 1000) return "M";
  return result.join("");
}

export default integerToRoman;