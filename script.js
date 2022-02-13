let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    arr3 = [],
    arr4 = [],
    arr5 = []; 

// Получаем строчные буквы
const lowerCase = () => {

    for (let i = 97; i <= 122; i++) {
        arr3.push(String.fromCharCode(i));
    }
    
}
lowerCase();



// Получаем заглавные буквы
const uppercase = () => {

    for (let i = 65; i <= 90; i++) {
        arr4.push(String.fromCharCode(i));
    }
    
}
uppercase();


// Получаем символы
const symbols = () => {

    for (let i = 33; i <= 47; i++) {
        arr5.push(String.fromCharCode(i));
    }

    for (let i = 91; i <= 96; i++) {
        arr5.push(String.fromCharCode(i));
    }
    
}
symbols();
// //Запускает генератор при загрузке страницы
// genetate();

// Генерирует случайное число в заваисимости от range элемента
document.getElementById('param1').oninput = function lengtOf() {
    document.getElementById('lengt').innerHTML = this.value
}
// Получаем значения в зависимости от выбранных checkboxs

document.getElementById('generator').onclick = genetate;

function genetate() {
    let result =[];
    // Каждое условие проверяет какой checkbox включен 
    // и на его основе добавляет значения в итоговый список result
    if (document.getElementById('paramNumber').checked) {
        result = result.concat(arr2);
    }
    if (document.getElementById('paramStroka').checked) {
        result = result.concat(arr3);
    }
    if (document.getElementById('paramLow').checked) {
        result = result.concat(arr4);
    }
    if (document.getElementById('paramSimbol').checked) {
        result = result.concat(arr5);
    }
    result.sort(compareRandom); // перемешиваю рез.массив
    //console.log(result);
    document.getElementById('out').innerHTML = '';
    for (var k = 0; k < 6; k++) {
        var pass = ''; // будущий пароль
        var passLength = parseInt(document.getElementById('param1').value); // длина пароля
        for (var i = 0; i < passLength; i++) {
            // цикл по длине пароля
            // выбираю случайное значение из массива result
            pass += result[randomInteger(0, result.length - 1)];
        }
        document.getElementById('out').innerHTML += '<p>' + pass + '</p>';
    }
}  
// Случайно выбирает заданное количество элементов из массива
function compareRandom (a,b) {
    return Math.random() - 0.5
}
// Генерирует случайное число
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random()* (max - min + 1);
    rand = Math.round(rand)
    return rand;
}