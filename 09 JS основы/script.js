// комментарий
//   let imyaPolzovatelya = "Сергей";
//   let tiChoNiPonimesh = false;
//   let a = "str";
//   let d = "hello";

//   let firstName = "Иван";
//   let lastName = "Иванов";
//   let age = 22;
//   let isAdmin = false; // значение булева типа(true, false)
//   let numberOfWheels = 3;

//   let first_name = "Петя";
//alert(123);
// let user1 = "Ирина";
// let user2 = "Мария";
// user2 = "Иван"; // переопределение значения переменной
// // выводим значение в консоль
// console.log(user1 + user2);

// пример с инпутом
// let firstName = document.querySelector("#firstName");
// let firstNameError = document.querySelector("#firstNameError");

// firstName.addEventListener("blur", function () {
//   console.log(this.value);

//   if (this.value.length === 0) {
//     firstNameError.textContent = "Вы не заполнили важное поле";
//   } else {
//     firstNameError.textContent = "";
//   }
// });

// let cats = 46;
// let dogs = 3;

// let result = cats + dogs;

// console.log(result);
// console.log(result);
// console.log(result);
// console.log(result);

// let cars = 7;
// cars = cars - 1;

// console.log(cars);
// console.log(cars);
// console.log(cars);

// let arr = [1, 2, 3, 4, 5, 6]; // массив
// let obj = { name: "Иван", age: 22 }; // объект

// const user2 = "Мария";
// user2 = "Иван";
// console.log(user2);

// let userName = "д'Артаньян";
// let company = 'ООО "Рога и копыта"';
// console.log(userName);
// console.log(company);

// let number = "88";
// console.log(parseInt(number));

// let firstName = "Ирина";
// let lastName = "Иванова";
// let age = 22;

// // Меня зовут Ирина, моя фамилия Иванова, мне 22
// let userInfo = "Меня зовут" + " " + firstName + ", моя фамилия " + lastName + ", мне " + age + " года.";

// let userInfo2 = `Меня зовут ${firstName}, моя фамилия ${lastName}, мне ${age} года.`;

// console.log(userInfo);
// console.log(userInfo2);

// let car = "Ниссан";
// let colorCar = "Белый";
// let ageCar = 5;
// let isOwner = true;
// let mileageInKm = 200;
// let price = 4000;

// let myCarInfo = `Моя машина ${car}, ее цвет ${colorCar}, время владения ${ageCar} лет`;
// console.log(myCarInfo);

// let myCarInfo = "Марка автомобиля" + car + " , цвет автомобиля " + colorCar + ", возраст автомобиля " + ageCar + ", владелец " + isOwner + ", пробег " + mileageInKm + " километров.";
// console.log(myCarInfo);

// let carOffer = `Владелец ${isOwner} продаёт ${car}, цвет ${colorCar}, ${mileageInKm}км проезда, ${ageCar} лет на дороге, заинтрересовавшимся звоните по номеру телефона в профиле, торг у капота, начальная цена $${price}.`;
// console.log(carOffer);

// let car;

// // car = "Volvo";
// console.log(car);

/**
 * операции сравнения
 */
// let bool = 3 < 9;
// console.log(bool);

// let password = "12345";
// console.log(password.length >= 6);

// const password = "123456";
// let passLen = password.length; // 6

// console.log(passLen >= 6);
// console.log(`В строке "${password}" ${passLen} символов`);

// const password = "9999"; // системный пароль
// let userPass = "9999"; // пароль от клиента
// console.log(password == userPass);

// '4' !== 4

/*
// И (&&)
5 > 4 && 6 > 3
true
2 > 4 && 6 > 3
false
5 > 4 && 2 > 3
false
3 > 4 && 2 > 3
false
*/

/*
// учетные данные для входа
let login = "admin";
let password = "1234";

// предоставленные данные при входе
let userLogin = "admin";
let userPass = "1234";

// проверяем данные
let result = userLogin === login && userPass === password;

console.log(result);
*/

/**
 * ИЛИ (||)
 */
/*
7 > 5 || 4 < 8
true
1 > 5 || 4 < 8
true
7 > 5 || 9 < 8
true
2 > 5 || 9 < 8
false
*/

/*
let age = 65;

let result = age < 5 || age >= 64;
console.log(result);
*/

// НЕ (!)
// let password = "123456";

// // получить истину, если длина пароля не равна нулю
// console.log(password.length !== 0);
/*
!false
true
!true
false
!0
true
!4
false
!'привет'
false
!'r'
false
*/
