const array = [7, 2, 9, 4, 5, 7, 1, 2, 5, 9, 4];
const result = [];
for (i = 0; i < array.length; i++) {
    if (array.includes(i)) {
        result.push(i)
    }
}
console.log(result);