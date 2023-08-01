// *********************************Стрілочна функція (Arrow function)****************************************\\

// JSDoc - comment коротка відомість про функцію яка допомагає іншому розробнику швидше зрозуміти що робить, приймає та повертає функція.
// Для створення JSDoc - comment на рядку перед створеною функціює натискаємо /**
// Далі описуємо нашу функцію.

// function declaration

/**
 * Buy product, log message with purchase info
 * @param productName - name of product
 * @param {Number} productQty
 * @param {Number} price
 */
function buyProduct(productName, productQty, price) {
    console.log(`You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${productQty * price}`);
}

// buyProduct('apple', 10, 35)


// arrow function
// 





// ***********Неявне повернення******** \\


// Явне повернення
// /**
//  * Get product total price
//  * @param {Number} qty - quantity items
//  * @param {Number} price - price per item
//  * @returns {Number} - total price
//  */
// const getTotalPrice = (qty, price) => {
//     return qty * price
// }

// console.log(getTotalPrice(3, 150));



// Неявне повернення

const getTotalPrice = (qty, price) => qty * price;

// console.log(getTotalPrice(3, 150));



// *****Можливість не огортати параметри в круглі дужки якщо параметр один*****\\

// Один параметр з дужками
// /**
//  * Check user strong password 😂
//  * @param {String} password
//  * @returns {Boolean}
//  */
// const checkPassword = (password) => password === 'qwerty111';

// console.log(checkPassword('qwerty111'));





// Один параметр без дужок

// const checkPassword = password => password === 'qwerty111';

// console.log(checkPassword('qwerty111'));


// const sayHi = () => 'Hello!';
// console.log(sayHi());


// ***********Відсутність псевдомасиву arguments******** \\


// function declaration

/**
 * Log items
 */
// function getProductList() {
//     // console.log(arguments);
//     for (const product of arguments) {
//         console.log(product);
//     }
// }


// getProductList('Apple', 'Banana', 'Orange', 'Mango')
// getProductList('Apple', 'Banana', 'Orange', 'Mango', 'Watermelon')



// arrow function

// const getProductList = (...args) => {
//         for (const product of args) {
//             console.log(product);
//         }
// }

// // getProductList('Apple', 'Banana', 'Orange', 'Mango')
// getProductList('Apple', 'Banana', 'Orange', 'Mango', 'Watermelon', 'Coconut')




// **************************************Callback function*********************************************\\

// *******Callback функція у вигляді посилання на функції*****\\


// function logResult(number1, number2, callback) {
//     console.log(number1, number2);
//     console.log(callback);
//     const result = callback(number1, number2);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, add)
// logResult(4, 5, multiply)


// function add(a, b) {
//     return a + b
// }

// function multiply(a, b) {
//     return a * b;
// }

// /**
//  * Adding two numbers
//  * @param {function} callback
//  */
// function add (a, b, callback) {
//     console.log(callback)
//     console.log(a + b);
//     callback(); // callbackFunctionEnd()
// }

// add(5, 15, callbackFunctionEnd);

// function callbackFinish () {
//     console.log('Function executing is over!');
// }

// function callbackFunctionEnd () {
//     console.log('Function is done!')
// }



// ******************Інлайнова Callback функція******************\\
// function logResult(a, b, callback) {
//     console.log(callback);
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// const add = (a, b) => a + b;

// logResult(4, 5, add)
// logResult(4, 5, (a, b) => a * b)









// ************************************** forEach *********************************************\\
// const products = ['Apple', 'Banana', 'Orange', 'Mango', 'Watermelon'];


// Цикл for
// for (let i = 0; i < products.length; i += 1) {
//     const product = products[i];

//     console.log(`${i + 1} - ${product}`);
// }


// forEach

// products.forEach((element, index) => {
//     console.log(`${index + 1} - ${element}`);
// })


















// ******************************************* Практика **************************************************\\


// Task - 1
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const product = {
//         ...obj,
//         id: Date.now()
//     }
    
//     callback(product);
// }



// function logProduct(product) {
//     console.log(product)
// }



// function logTotalPrice({ price, quantity }) {
//     console.log(price * quantity);
// }

// createProduct({ 
//     name: '🍎', 
//     price: 30, 
//     quantity: 3 
// }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);




// Task-2
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.

/**
 * 
 * @param {function} success 
 * @param {function} error 
 * @returns 
 */
function getProductDetails(id, success, error) {
    // products.forEach((currentProduct) => {
    //     if (id === currentProduct.id) {
    //         console.log('Success!');
    //         return;
    //     }
    // })

    for (const currentProduct of products) {
        if (id === currentProduct.id) {
            console.log(currentProduct);
            success(currentProduct)
            return;
        }
    }

    error(id);
}

// const products = [
//     {
//         id: 1,
//         name: "Телефон",
//         price: 10000,
//         description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//     },
//     {
//         id: 2,
//         name: "Ноутбук",
//         price: 25000,
//         description: "Легкий та потужний ноутбук для роботи та розваг.",
//     },
//     {
//         id: 3,
//         name: "Планшет",
//         price: 8000,
//         description: "Компактний планшет для перегляду контенту.",
//     },
// ];



// getProductDetails(3, handleSuccess, handleError)
// getProductDetails(44, handleSuccess, handleError)


// function handleSuccess(message) {
//     console.log(`✅ Success!`, message);
// }


// function handleError(productId) {
//     console.log(`❌ Error! Product with ${productId} id not found`);
// }


// const numbers = [1, 2, 3, 4];
// const products = ['Apple', 'Banana', 'Orange', 'Mango', 'Watermelon'];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }
// console.log('')

// products.forEach((currentElement, index, array) => {
//     console.log(currentElement)
// })

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//    const propArr = [];

//    for (const key of products) {
//        if (Object.keys(key).includes(propName)) {
//         console.log(propName)
//         console.log(key)
//            propArr.push(key[propName]);
//        }
//    }

//    return propArr;
// }

// console.log(getAllPropValues('price'));

// const user = {
//     name: 'Alex',
//     age: 28
// }

// console.log(user['name'])