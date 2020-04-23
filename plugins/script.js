/*
// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
let car = {
    manufacturer: "Porsche",
    model: "911 Carrera",
    production: 2015,
    speed: "250 km/h",
}
// Функция для вывода на экран информации об автомобиле;
function info(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]};`);
    }
}
info(car);
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
function timeCount(distance) {
    const s = distance,
        v = car.speed.match(/\d+/), // car[speed].match(/\d+/); ??
        t = s / v,
        result = t + Math.floor(t / 4),
        m = Math.round(((result - Math.floor(result)) % 10) * 60);
    return (result >= 1) ? `${Math.floor(result)} hours and ${m} minutes` : `${m} minutes`;
}
console.log(timeCount(1234));

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
let fraction = {
    numerator: 4, // числитель
    denominator: 16, // знаменатель
}
// Функция сложения 2-х объектов-дробей
function plusFraction(obj) {
    const a = obj.numerator,
        b = obj.denominator;
    return `numerator ${a} + denominator ${b} = ${a + b}`;
}
console.log(plusFraction(fraction));
// Функция вычитания 2-х объектов-дробей
function minusFraction(obj) {
    const a = obj.numerator,
        b = obj.denominator;
    return `numerator ${a} - denominator ${b} = ${a - b}`;
}
console.log(minusFraction(fraction));
// Функция умножения 2-х объектов-дробей;
function multiplyFraction(obj) {
    const a = obj.numerator,
        b = obj.denominator;
    return `numerator ${a} * denominator ${b} = ${a * b}`;
}
console.log(multiplyFraction(fraction));
// Функция деления 2-х объектов-дробей;
function divisionFraction(obj) {
    const a = obj.numerator,
        b = obj.denominator;
    return `numerator ${a} / denominator ${b} = ${a / b}`;
}
console.log(divisionFraction(fraction));
// Функция сокращения объекта-дроби.
function reduceFraction(obj) {
    const a = obj.numerator,
        b = obj.denominator;
    let hcf, min, max;
    if (a > b) {
        max = a;
        min = b;
    } else if (a < b) {
        max = b;
        min = a;
    } else {
        hcf = 1;
    }
    while (min && max) {
        min > max ? min %= max : max %= min;
    }
    min += max;
    hcf = min;
    return `numerator ${a} / denominator ${b} = ${a / hcf} / ${b / hcf}`;
}
console.log(reduceFraction(fraction));

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
let time = {
    hour: 12,
    min: 45,
    sec: "05",
}
// Функция вывода времени на экран;
function info(obj) {
    console.log(`${obj.hour}:${obj.min}:${obj.sec}`);
}
info(time);

function hourConvert(sec) {
    let h = Math.floor(sec / 3600);
    let m = Math.floor(sec / 60) - (h * 60);
    let s = sec % 60;
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }
    if (h >= 24) {
        let d = Math.floor(h / 24),
            nh = h - d * 24;
        return `${d} day(s) and «${nh}:${m}:${s}»`
    }
    return `«${h}:${m}:${s}»`;
}
// Функция изменения времени на переданное количество секунд;
function changeSec(obj, secChange) {
    let h = +obj.hour * 3600,
        m = +obj.min * 60,
        s = +obj.sec + secChange;
    return hourConvert(h + m + s);
}
console.log(changeSec(time, 64));
// Функция изменения времени на переданное количество минут;
function changeMin(obj, minChange) {
    let h = +obj.hour * 3600,
        m = (+obj.min + minChange) * 60,
        s = +obj.sec;
    return hourConvert(h + m + s);
}
console.log(changeMin(time, 45));
// Функция изменения времени на переданное количество часов.
function changeHour(obj, hourChange) {
    let h = (+obj.hour + hourChange) * 3600,
        m = +obj.min * 60,
        s = +obj.sec;
    return hourConvert(h + m + s);
}
console.log(changeHour(time, 8));
*/