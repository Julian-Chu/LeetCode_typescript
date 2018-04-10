function integerToRoman(integer:number):string{
  if(integer == 1)  return "I";
  if(integer == 5)  return "V";
  return "";
}

export default integerToRoman;