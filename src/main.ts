const numbers: number[] = [15, 42, 8, 91, 37, 24, 63, 50, 11, 77]
const words: string[] = ["apple", "banana", "orange", "grape", "kiwi", "melon"]

console.log("%cFirst Part:", "font-weight: bold")
console.log(numbers.map((num: number) => num * 2))
console.log(words.filter((word: string) => word.length > 5))
console.log(numbers.reduce((acc: number, curr: number) => (acc + curr), 0))
console.log(numbers.some((num: number) => num > 10))