let UN = "Artem";                         // string — строка
let UA = 18;                                // number — число
let UT = true;                       // boolean — логический тип
let myNull = null;                          // null — намеренное отсутствие значения
let myObject = {name: "Иванов"};            // object — объект
let UID = Symbol("id");                     // symbol — уникальный идентификатор
console.log(typeof UN);     // "string"
console.log(typeof UA);     // "number"
console.log(typeof myBoolean);    // "boolean"
console.log(typeof myNull);       // "object" 
console.log(typeof myObject);     // "object"
console.log(typeof UID);     // "symbol"
// явное преобразование типов

// String()
// вывод "18", число можно преобразовать в строку
console.log(String(UA));

// вывод "1", число можно преобразовать в строку UserTrue
UT = 1;
console.log(String(UT));

// вывод "true", возвращает новое значение тип string
console.log(String(isOnl));

// Number()
// вывод NaN, в строке есть буквы
console.log(Number(UN));

// вывод NaN, второй точки в числе быть не может
birthdayUser = "8.03.2007";
console.log(Number(BU));

// вывод 1, true=1 false=0
console.log(Number(isOnl));

// Boolean()
// вывод true, переменная содержит значение
console.log(Boolean(UT));

// вывод true, переменная содержит не пустую строку
console.log(Boolean(UN));

// Неявное преобразование типов
// если есть + с хотя бы одной строкой, всё другие значения автоматически превращается в строку:

// вывод "322"
console.log("32" + 2);
// вывод "Hello true"
console.log("Hello " + true);
// вывод "Value: null"
console.log("Value: " + null);