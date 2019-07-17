let array = [1,2,3,4,5,6,7,8,9,0];

// forEach
console.time("forEach");
array.forEach((item,index) => {
    return array[index] = item * 2;
});
console.timeEnd("forEach"); // 0.612ms
console.log(array);

// map
console.time("map");
let newArray = array.map((item, index) => {
    return item * 2;
});
console.timeEnd("map"); // 0.142ms
console.log(newArray);
console.log(array);

// for
console.time("for");
let array2 = [1,2,3,4,5,6,7,8,9,0];
for (let i = 0; i < array2.length; i++) {
    array2[i] = array2[i] * 2;
}
console.timeEnd("for"); // 0.021ms
console.log(array2);
