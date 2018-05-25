// Leetcode 20 Valid Parenthesses
var isValid = function(s:string):boolean {
    let Parenthesses = new Map<string,string>();
    Parenthesses.set("(",")");
    Parenthesses.set("[","]");
    Parenthesses.set("{","}");

    
    for(let i=0; i< s.length; i+=2){
        if(Parenthesses.get(s[i]) === s[i+1]) return true
    }
    return false;
};

export default isValid;