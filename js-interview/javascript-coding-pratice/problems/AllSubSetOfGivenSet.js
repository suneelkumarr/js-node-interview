const getAllSubsets = arr => {
    arr.reduce((subsets, value) => {
        if (subsets !== undefined) {
            subsets.concat(subsets.map(set => [value, ...set]))
        }
    }, [[]])
}

console.log(getAllSubsets([1, 2, 3])); 