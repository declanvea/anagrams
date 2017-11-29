// P1: find all the words that are anagrams of “least.”  (There will be 4 words in this set, including “least” itself).
let value1 = 'least';
function sortValue(str) {
    return str.toLowerCase().split('').sort().join('').trim();
}
let valueSort1 = sortValue(value1);
let answer1 = words.filter(function(x){
      return sortValue(x) == valueSort1;
});
console.log(answer1);

// P2: The array ["lair", "liar", "rail"] is a set of three words that are all anagrams of each other - that is, they all consist of exactly the same letters. Find all the sets of 5 or more words within words.json that are anagrams of each other.
// Note: You should not need to compare every word against every other!
let dictionary = {};
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let sort = sortValue(word);
  if(sort in dictionary){
    dictionary[sort].push(word);
  } else {
    dictionary[sort] = [word];
  }
}
let dictionary2 = {};
for (let prop in dictionary) {
  if(dictionary[prop].length >= 5){
    dictionary2[prop] = dictionary[prop];
  }
}
console.log(dictionary2);

// P3: Allow the user to enter text in a text field and search for all the words that are anagrams of it.
let input = document.getElementById('input');
function handleWord(){
  let valueSort = sortValue(input.value);
  let answer3 = words.filter(function(x){
        return sortValue(x) == valueSort;
});
  console.log(answer3);
};

// P4: Allow the user to enter a word or phrase in a text field and search for two-word anagrams (ignoring spaces). Some examples:
// 	declan vea
// 	[ "aden", "dane", "dean", "edna" ] + [ "calve" ]
// 	[ "and", "dan", "dna" ] + [ "cleave" ]
// 	(these are examples, your program should find many more anagram combinations)
let input2 = document.getElementById('input2');
let objectKeys = Object.keys(dictionary);
console.log(objectKeys);

function handleWord2(){
  let sortedInput = sortValue(input2.value);
  console.log(sortedInput);
    let filterKeys = [];
     for (let i = 0; i < objectKeys.length; i++) {
       let objectI = objectKeys[i];
       total = 0;
       for (let j = 0; j < objectI.length; j++) {
         let objectIJ = objectI[j];
         if(sortedInput.indexOf(objectIJ) === -1){
           total++;
         }
       }
       if(total === 0){
       filterKeys.push(objectI);
     }
   }
   console.log(filterKeys);

  let results = [];
  for (let i = 0; i < filterKeys.length - 1; i++) {
    for (let j = i + 1; j < filterKeys.length; j++) {
        if(sortedInput.length === (filterKeys[i].length + filterKeys[j].length)){
          if(sortedInput === (sortValue(filterKeys[i] + filterKeys[j]))){
            results.push(`${dictionary[filterKeys[i]]} + ${dictionary[filterKeys[j]]}`);
          }
        }
      }
    }
console.log(results);
};


// P5: Search for three-word anagrams of a user-provided phrase. For example:
// 	maricris tejada
// 	[ "dare", "dear", "erda", "read" ] + [ "jam" ] + [ "satiric" ]
// 	[ "jamaica" ] + [ "red" ] + [ "stir" ]
// 	[ "jim" ] + [ "radiate" ] + [ "scar" ]
// (again just a few examples, your function should find many more solutions)
//
// Uses: Iteration, conditionals, String manipulation, nested control flow, arrays and dictionaries
function handleWord3(){
  let sortedInput = sortValue(input3.value);
  console.log(sortedInput);
    let filterKeys = [];
     for (let i = 0; i < objectKeys.length; i++) {
       let objectI = objectKeys[i];
       total = 0;
       for (let j = 0; j < objectI.length; j++) {
         let objectIJ = objectI[j];
         if(sortedInput.indexOf(objectIJ) === -1){
           total++;
         }
       }
       if(total === 0){
       filterKeys.push(objectI);
     }
   }
   console.log(filterKeys);

  let results = [];
  for (let i = 0; i < filterKeys.length - 1; i++) {
    for (let j = i + 1; j < filterKeys.length; j++) {
      for (let n = j + 1; n < filterKeys.length; n++) {
        if(sortedInput.length === (filterKeys[i].length + filterKeys[j].length + filterKeys[n].length)){
          if(sortedInput === (sortValue(filterKeys[i] + filterKeys[j] + filterKeys[n]))){
            results.push(`${dictionary[filterKeys[i]]} + ${dictionary[filterKeys[j]]} + ${dictionary[filterKeys[n]]}`);
            }
          }
        }
      }
    }
console.log(results);
};
