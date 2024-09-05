const collectionNumber = [1, 2, 3, 4, 5, 6]
/**
 * Manipulasi array sederhana
 * Buat array baru berisi angka2 yg merupakan hasil perkalian 3 dari setiap element array collectionNumber
 */
arr = []
collectionNumber.forEach(element => {
    arr.push(element * 3)
});
console.log(arr);


const colors = ["blue", "black", "purple", "white", "pink"]
/**
 * buat array baru yang isinya element yang hurufnya lebih dari 4 berdasarkan array colors
 */

arr = colors.filter(function (el) {
    return el.length > 4
})
console.log(arr);

//eksplor
console.log('H' + '8');
console.log('H' + 8 + 2);
console.log(28 + 2 + '');
console.log('' + true);

let arrNums = [1, 2, 3, 4, 5];
arrNums.push(6)
console.log(arrNums)
arrNums.unshift(0)
console.log(arrNums)

let idx = arrNums.length
arrNums[idx] = 100
console.log(arrNums)

let fruits1 = ['mango', 'apple', 'pear'];
let fruits2 = ['papaya', 'guava'];
let fruits3 = ['strawberry', 'pineapple'];
fruits1.push.apply(fruits1, fruits2);
console.log(fruits1);
let allFruits = [...fruits2, ...fruits3];
console.log(allFruits);
let invalidJoin = [fruits2, fruits3];
console.log(invalidJoin);

let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(2, 2, 'NewMonth1', 'NewMonth2');
console.log(months);

const people = [
    { name: "Adam", age: 25 },
    { name: "Rengga", age: 30 },
    { name: "Danta", age: 20 },
    { name: "Denta", age: 35 }
];

people.sort((a, b) => a.name - b.name);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people);