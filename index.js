const collectionNumber = [1, 2, 3, 4, 5, 6]
/**
 * Manipulasi array sederhana
 * Buat array baru berisi angka2 yg merupakan hasil perkalian 3 dari setiap element array collectionNumber
 */
arr = []
collectionNumber.forEach(element => {
    arr.push(element*3)
});
console.log(arr);


const colors = ["blue", "black", "purple", "white", "pink"]
/**
 * buat array baru yang isinya element yang hurufnya lebih dari 4 berdasarkan array colors
 */

arr = colors.filter(function(el){
    return el.length>4
})
console.log(arr);   