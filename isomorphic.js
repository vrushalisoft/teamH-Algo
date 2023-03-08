// Check if a given string is an isomorphic

cl = console.log;

function isIsomorphic(str1, str2){
    if(str1.length !== str2.length){
        return "Please enter same length strings";
        // return cl("Please enter same length strings");
 
    }
    const map = {};
    for(let i = 0; i < str1.length; i++){
        const char1 = str1[i];
        const char2 = str2[i];
        // if (map[char1] === undefined){
        if (!map[char1]){
            map[char1] = char2;
        }else if(map[char1]!== char2){
            return "Given string is not a Isomorphic";
            // return cl("Given string is not a Isomorphic");
        }
    }
    return "Given string is a Isomorphic";
    //return cl("Given string is a Isomorphic");
}

document.write(isIsomorphic("eggs", "add")); 
// isIsomorphic("egg", "ard");