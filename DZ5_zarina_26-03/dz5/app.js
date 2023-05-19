const books = [
    { id: 1, name: 'атака титанов' },
    { id: 2, name: 'мулан' },
    { id: 3, name: 'пионеры' },
    { id: 4, name: 'агата и кристи' },
];
  
const names = books.map(books => books.name);
console.log(names);
const one = books.map(books => books.name === 'мулан')
console.log(one);

const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};
  
const numbers = [1, 2, 3, 4, 46, 543];
console.log(getAverage(numbers));