const numbers: number[] = [15, 42, 8, 91, 37, 24, 63, 50, 11, 77]
const words: string[] = ["apple", "banana", "orange", "grape", "kiwi", "melon"]

console.log("%cFirst Part:", "font-weight: bold")
console.log(numbers.map((num: number) => num * 2))
console.log(words.filter((word: string) => word.length > 5))
console.log(numbers.reduce((acc: number, curr: number) => (acc + curr), 0))
console.log(numbers.some((num: number) => num > 10))



// Trying to make the second part work ONLY through MUTATING THE ORIGINAL
console.log("")
console.log("%cSecond Part:", "font-weight: bold")
const list: number[] = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194]


console.log("%cSort descending:", "font-style: italic")

list.sort((a: number, b: number) => b - a)
console.log(list)


console.log("")
console.log("%cSquare all numbers:", "font-style: italic")

list.forEach((num: number, index: number) => list[index] = num ** 2)
console.log(list)


console.log("")
console.log("%cRemove first four and last two elements:", "font-style: italic")


list.pop()
list.pop()
list.shift()
list.shift()
list.shift()
list.shift()

console.log(list)


console.log("")
console.log("%cRemove all multiples of 4:", "font-style: italic")

// Creating a constant pointer to the last element of the original array
// to make forEach() and splice() work with toReversed()
const lastIndex:number = list.length - 1;

list.toReversed().forEach((num: number, index: number) => {
    !(num % 4) && (list.splice(lastIndex - index, 1))
})

console.log(list)


console.log("")
console.log("%cFinal result: %c" + list.reduce((acc: number, curr: number) => acc + curr), "font-style: italic", "font-weight: bold")
