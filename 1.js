// Создаем пустой массив nums
let nums = [];

// Заполняем массив nums 10 случайными числами в диапазоне от -500 до 499 для интереса
for(let i = 0; i < 10; i++) {
    nums.push(Math.floor(Math.random() * 1000) - 500);
}

// В первую очередь выводим массив nums в консоль
console.log(nums);

// Создаем переменную MaxUneven и устанавливаем ее значение в null
let MaxUneven = null;

// Проходим по каждому элементу массива nums
for(let i = 0; i < nums.length; i++) {
    // Если текущий элемент нечетный (проверка nums[i] % 2 !== 0)
    if(nums[i] % 2 !== 0) {
        // Если MaxUneven еще не установлено (то есть равно null) или текущий элемент больше MaxUneven
        if(MaxUneven === null || nums[i] > MaxUneven) {
            // Текущий элемент становится новым максимальным нечетным числом
            MaxUneven = nums[i];
        }
    }
}

// Выводим максимальное нечетное число в консоль
console.log(MaxUneven);

