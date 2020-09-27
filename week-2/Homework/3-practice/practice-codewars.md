Complete the following CodeWars on JavaScript concepts you learned in previous weeks.

# CodeWars

- [Is it even?](https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript)
- [Will you make it?](https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript)
- [Removing elements](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript)
- [Grasshopper - Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript)
- [Find the Difference in Age between Oldest and Youngest Family Members](https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript)
- [Filter out the Geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript)


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg*fuelLeft >= distanceToPump


  function removeEveryOther(arr){
      let result = []
      for(let i = 0; i < arr.length; i++)
      if(i %2== 0){
          result.push(arr[i])
      }
  }
  return result
----------------------------------------------------
  var sumation = function(num){
      let sum = 0;
      for (x = 0; x <= num; x++){
          sum += x;
      }
      return
  }
--------------------------------------------------------

  funtion differenceInAges(ages){
      ages sort(
          funtion(a, b){
              return a -b;

          }
      )
      let result = [];
      result.push(ages[0]);
      result.push(ages[ages.length-1]);
      result.push(ages[ages.length-1]-ages[0]);
      return result
  }
-------------------------------------------------------------

  function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  geese.forEach(goose=>{
      const indice =birds.indexOf(goose)
      if(indice !== -1){
          birds.splice(indice, 1)
      }
  })
  

};
--------------------------------------