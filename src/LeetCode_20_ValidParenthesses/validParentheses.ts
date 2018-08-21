// Leetcode 20 Valid Parenthesses
var isValid = function(s:string):boolean {
    let Parenthesses = new Map<string,string>();
    Parenthesses.set("(",")");
    Parenthesses.set("[","]");
    Parenthesses.set("{","}");

    let i:number = 0;
    let tempArray:string[] = [];
    while(i < s.length){
        if(Parenthesses.has(s[i+1])){
            tempArray.push(s[i]);
            i+=2;
        }else if(tempArray.length !==0){
            if(tempArray.pop() !== s[i]) return false;
        }
        else{
            if(Parenthesses.get(s[i]) !== s[i+1]) return false;
            i++;
        }

    }
    return true;
};

export default isValid;