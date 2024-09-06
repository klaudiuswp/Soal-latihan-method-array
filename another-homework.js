makeAllCaps = (arrayOfWords) => {
    return new Promise((resolve, reject) => {
        if (arrayOfWords.every(word => typeof word == "string")) {
            resolve(
                arrayOfWords.map(word => word.toUpperCase())
            )
        } else {
            reject(
                "Error: isi array harus berupa string"
            )
        }
    })
}
sortWords = (arrayOfWords) => {
    return new Promise((resolve,reject) => {
        if (arrayOfWords){
            resolve(
                arrayOfWords.sort()
            )
        } else {
            reject(
                "Error: harus berupa array"
            )
        }
    })
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => { console.log(result) })
    .catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => { console.log(result) })
    .catch(error => { console.log(error) })
