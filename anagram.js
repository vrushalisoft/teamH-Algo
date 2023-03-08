let cl = console.log;

let isAnagram = function(str1, str2){
    let sorted1 = str1.split('').sort().join('').toLowerCase().trim();
    let sorted2 = str2.split('').sort().join('').toLowerCase().trim();
    return (sorted1 === sorted2);
}

cl(isAnagram('egg', 'GEG'));
cl(isAnagram("foo", "bar"));
cl(isAnagram('frontend', 'backend'))
cl(isAnagram('hello', 'elohl'));
cl(isAnagram('Anagram', ' Anagram '));