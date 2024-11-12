// Задание 1
// Напишите функцию checkTask(nums), которая будет возвращать массив, в котором для каждого из чисел исходного массива nums указано количество чисел меньше данного числа.
// К примеру, для массива [8,1,2,2,3], функция должна возвратить:
// [4,0,1,1,3]

// function checkTask(nums) {
//   return nums.map((el) => {
//     return nums.filter((number) => number < el).length;
//   });
// }
// let nums = [8, 1, 2, 2, 3];
// console.log(checkTask(nums));

// Задание 2
// Напишите функцию checkTask(input), которая принимает в переменную input строку и возвращает ее в виде нумеронима.
// К примеру, если в параметр input передали данную строку:
// Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!
// Функция должна возвратить такой результат:
// С5й п2ь у п11, Т4о г2е - не б3, Е2и в4л п2ь т7й - То т3а т2е - с3!
// т.е. каждое слово, если оно длинее 4х букв, превращается в нумероним, первую и последнюю букву нужно оставить, а между ними, буквы заменить числом - количеством букв по середине.

// function checkTask(input) {
//   return input
//     .split(" ")
//     .map((el) => {
//       if (el.length >= 4) {
//         return el[0] + (el.length - 2) + el[el.length - 1];
//       } else {
//         return el;
//       }
//     })
//     .join(" ");
// }

// const input =
//   "Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!";

// console.log(checkTask(input));

// Задание 3
// Напишите функцию checkTask(arr), принимающая в аргументы массив с числами.
// Функция должна найти самое часто повторяющееся число и вывести в консоль это число.
// Например, для массива:
// [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]
// Вывод будет:
// 5

// Задание 4
// Вам дана функция checkTask, принимающая массив arr с числами. Используя метод reduce(), вычтите числа в массиве начиная с начала и выведите в консоль результат.
// Например:
// checkTask( [175, 50, 25])
// Вывод:
// 100

// function checkTask(task) {
//   return task.reduce((acc, el) => acc - el);
// }

// let task = [175, 50, 25];
// console.log(checkTask(task));

// Берилген массивдеги бардык сандардын суммасын табыңыз. Төмөндө массив мисал катары берилген:
// const numbers = [1, 2, 3, 4, 5];

// let numbers = [1, 2, 3, 4, 5];
// let res = 0;
// for (let i = 0; i < numbers.length; i++) {
//   res += numbers[i];
// }
// console.log(res);

// const fruits = ["apple", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for циклин колдонуп, 1 ден 20га чейинки сандардын ичинен так сандарды консольго чыгарыңыз.

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for циклин колдонуп, 1ден 10го чейинки сандардын факториалын эсептеп консольго чыгарыңыз.

// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// for циклин колдонуп, 1 ден 100гө чейинки сандардын ичинен 3кө жана 5ке бөлүнгөн сандарды консольго чыгарыңыз.

// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// Берилген сандардын массивинен жуп жана так сандарды өз-өзүнчө эсептеп, алардын суммасын консольго чыгарыңыз.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenSum = 0;
// let oddSum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenSum += numbers[i];
//   } else {
//     oddSum += numbers[i];
//   }
// }

// console.log(evenSum + oddSum);

// function test(n) {
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(test(4));

// function zero(el) {
//   return el ? el(0) : 0;
// }
// function one(el) {
//   return el ? el(1) : 1;
// }
// function two(el) {
//   return el ? el(2) : 2;
// }
// function three(el) {
//   return el ? el(3) : 3;
// }
// function four(el) {
//   return el ? el(4) : 4;
// }
// function five(el) {
//   return el ? el(5) : 5;
// }
// function six(el) {
//   return el ? el(6) : 6;
// }
// function seven(el) {
//   return el ? el(7) : 7;
// }
// function eight(el) {
//   return el ? el(8) : 8;
// }
// function nine(el) {
//   return el ? el(9) : 9;
// }

// function plus(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// function minus(a) {
//   return function (b) {
//     return a - b;
//   };
// }
// function times(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// function dividedBy(a) {
//   return function (b) {
//     return a / b;
//   };
// }
// console.log(six(dividedBy(two())));

// const str = "the-movie_screen";

// Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9].  создайте строку '-1-2-3-4-5-6-7-8-9-'.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const res = "-" + arr.join("-") + "-";

// console.log(res, "aibek");

// Подсчет количества пробелов в строке: let str = "Это строка с пробелами";

// let str = "Это строка с пробелами";
// let spaceCount = str.split(" ").length - 1;
// console.log(spaceCount); // 3

// 3. Вывод таблицы умножения для числа 5

// const num = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// / Дана функция checkTask(arr) которая принимает массив c числами. При помощи метода reduce необходимо вернуть новый массив без дубликатов.
//  const arr = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

// function task(arr) {
//   return arr.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//     }
//     return acc;
//   }, []);
// }

// const arr = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// const res = task(arr);
// console.log(res);
