//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = (string, list) => {
    for(let name of dog_names){
        if (dog_string.includes(name)){
            console.log(`Matched ${name}`)
        } else {
            console.log('No Match')
        }
    }
}
console.log(findWords(dog_string, dog_names))



//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

 function replaceEvens(arr){
    for(i= 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr[i] = 'Even Index';
        }
    }
    return(arr)
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// TWO CODE WARS IN JS THAT I ALREADY DID IN PYTHON :
// Vowel Count : https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let string2 = str.toLowerCase()
    let vowel_count = 0
    for (let i of string2){
      if (vowels.includes(i)){
        vowel_count++
      }
    }
    return vowel_count;
  }

  // Detect Pangram : https://www.codewars.com/kata/545cedaa9943f7fe7b000048

  function isPangram(string){
    let string2 = string.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet.every(x => string2.includes(x));
  }