// Remove all duplicate words from a string, leaving only single (first) words entries.

// Examples:
// Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output: 'alpha beta gamma delta'

function removeDuplicateWords(s){
    let newString = s.split(" ");
    const onlyUnique = (value, index, self) => { 
      return self.indexOf(value) === index;
    };
    return newString.filter(onlyUnique).join(" ");
};