(function() {
  'use strict';

var loop = function(collection, callback){
    
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
};

// 1. countVowels
var countVowels = function(string) {
	var count =0;
	loop(string, function(letter){
	if(letter === "i" || letter === "e" || letter === "a"|| letter === "o" || letter === "u") {
		count++
	}	
});

   return count;	
};

console.log('This function counts the number of vowels in the string "hey whats up" and outputs:',countVowels("hey whats up"));

// 2. stringReversal
var stringReversal = function(string){
	var results =[];
	loop(string, function(letter) {
	results.unshift(letter);
	//console.log(results);
});
 return results.join('');
};

console.log('This function reverses the word "hello" and outputs:',stringReversal("hello")); 

// 3. isPalindrome

var isPalindrome = function(string){
	return stringReversal(string) === string;
 
};
	var isItFalse = console.log('This function checks to see if the word "bad" is a Palindrome and should output:',isPalindrome("bad"));
	var isItTrue = console.log('This function checks to see if the word "hannah" is a Palindrome and should output:',isPalindrome("hannah"));

// 4. largestNumber

	//console.log("is this working?");
var largestNumber = function(listOfNumbers){
	var biggestNumber = 0;

	loop(listOfNumbers, function(number){

		if(number > biggestNumber) {
			biggestNumber = number; 
		}
	}); 
	return biggestNumber
}
	
var nums = [1, 21, 471, 470, 39, 10, 92];

  var largestNum = largestNumber(nums);
  console.log('This function checks to see what the largest number is in this array [1, 21, 471, 470, 39, 10, 92], and that number is:', largestNum); //471

// 5. multBy
var multBy = function(array, number) {
	var newArray = [];
	loop(array, function(element){
		var multiplyNumber = number * element
		newArray.push(multiplyNumber)
	}) 
	return newArray;
	};
  var nums = [1, 2, 3, 4, 5];
  var multipliedArray = multBy(nums, 3);
  console.log('This function takes in the number 3 and multiplies it by the numbers in the array [1, 2, 3, 4, 5] and outputs:', multipliedArray); // [3, 6, 9, 12, 15];
// 6. squareOf <-- THIS IS WRONG
var powerOf = function (array, number){
	var newArray =[];
	loop(array, function(element){
		var raisedToPow = Math.pow(element, element);
		newArray.push(raisedToPow)
	})
	return newArray;
}; 
  var nums = [1, 2, 3, 4, 5];
  var newArray = powerOf(nums, nums);
  console.log('This function takes a number and raises it by its own power. The output should be [1, 8, 27, 256, 3125]:', newArray) // [1, 8, 27, 256, 3125];
// 7. capitalizeFirstLetters 

// 8. collectValues 

// 9. containsValue 

// 10. copyObj

// 11. extendObj 

// 12. swapShuffle 


var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
console.dir(sampleCarList);


// 13. findBlueCars

// 14. findCarsByColor

// 15. findCarsByYear

// 16. findCarsBetweenYears

// 17. findCarsByMake

// 18. findCarsByMakeAndModel

// 19. Random Price Generator

// 20. VerySpecificSearch





}());
