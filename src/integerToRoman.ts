function integerToRoman(integer:number):string{
  if(integer === 1)  return "I";
  if(integer === 5)  return "V";
  if(integer === 10) return "X";
  if(integer === 50) return "L";
  if(integer === 100) return "C";
  if(integer === 500) return "D";
  if(integer === 1000) return "M";
  return "";
}

export default integerToRoman;