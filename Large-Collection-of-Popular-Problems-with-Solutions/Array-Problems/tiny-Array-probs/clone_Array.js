//method:1

let originalArray = [1, 2, 3]
let [...arrayClone] = originalArray
console.log("1", arrayClone)

//methods:2
let originalArray1 = [1, 2, 3]
let arr2 = originalArray1.concat()
console.log("2", arr2)

//Method 3:

let originalArray2 = [1, 2, 3]
let arr3 = originalArray2.slice(0)
console.log("3", arr3)

//method 4:
let originalArray3 = [1, 2, 3]
let arr4 = originalArray3.splice(0)
console.log("4", arr4)

//Method 5:

let originalArray4 = [1, 2, 3]
let arr5 = JSON.parse(JSON.stringify(originalArray4))
console.log("5", arr5)

//Method 6:
let originalArray5 = [1, 2, 3]
let arr6 = originalArray5
console.log("6", arr6)

//Mthods 7:
let originalArray6 = [1, 2, 3]
let arr7 = []
originalArray6.forEach((data) => {
    arr7.push(data)
})
// Methods 8
let arr8 = originalArray6.map((data) => {
    return data
})
console.log("7", arr7)
console.log("8", arr8)