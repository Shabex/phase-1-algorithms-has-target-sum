function hasTargetSum(array, target) {
  for (let i =0; i<array.length-1; i++){
    for (let j = i+1; j<array.length; j++){
      if (array[i]+array[j] === target){
        return true
      }
    }

  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/
//Time Complexity: 0(n^2)

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
//The function has two arguements, an array and a target
//Two elements from the array when summed up should give us the target
//sort the array in non-decreasing order 
// initialize two index variable to find the candidate element in the array
// i for index 0 and j for the second last index i.e j = array.length-1
//use for loop to pass in the candidates of the array





// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
