let arr1 = [1, 2,3,5,4];
let arr2 = [];
for(const item of arr1) {
  if(item %2 ===0) {
    arr2 = arr2.concat([item])
  }
};

console.log(arr2)
