// "use strict";
// let num = 266219,
//     rezult,
//     rezult2;

// rezult = 2 * 6 * 6 * 2 * 1 * 9;
// console.log(rezult);

// rezult2 = rezult ** 3;
// console.log(rezult2);

// let digit1 = rezult2.toString()[0];
// let digit2 = rezult2.toString()[1];
// console.log(digit1, digit2);


let title = prompt("Как называется ваш проект ?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");
let fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);
let rollback = fullPrice / 100 * 10;
let servicePercentPrice = fullPrice - rollback;
console.log(Math.ceil(servicePercentPrice + " рублей, долларов, гривен, юани"));

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 <= 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 <= 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
    console.log("Что то пошло не так");
}